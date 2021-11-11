import { createRedisCache } from '@envelop/response-cache-redis'

import { logger } from './logger'
import { redis } from 'src/lib/redis'

const EXPIRE_IN_SECONDS =
  (process.env.EXPIRE_IN_SECONDS && parseInt(process.env.EXPIRE_IN_SECONDS)) ||
  30

export const isPrismaMiddlewareInvalidationEnabled =
  process.env.ENABLE_PRISMA_MIDDLEWARE_INVALIDATION === 'true'

const enableCache = (context) => {
  const enabled = context.request.headers['enable-response-cache']
  if (enabled && enabled === 'true') return true
  if (enabled && enabled !== 'true') return false
  return true
}

// Create the Redis Cache
export const cache = createRedisCache({ redis })

// Configure the Response Cache
export const responseCacheConfig = {
  enabled: (context) => enableCache(context),
  cache,
  invalidateViaMutation: !isPrismaMiddlewareInvalidationEnabled,
  ttl: EXPIRE_IN_SECONDS * 1000,
}

const ACTIONS_TO_INVALIDATE = [
  'update',
  'updateMany',
  'upsert',
  'delete',
  'deleteMany',
]
const MODELS_TO_INVALIDATE = [
  'Album',
  'Artist',
  'Customer',
  'Employee',
  'Genre',
  'Invoice',
  'InvoiceLine',
  'MediaType',
  'Playlist',
  'Track',
]

export const buildPrismaEntityToInvalidate = ({ model, id }) => {
  return { typename: model, id }
}

export const buildPrismaEntitiesToInvalidate = ({ model, ids }) => {
  return ids.map((id) => {
    return buildPrismaEntityToInvalidate({ model, id })
  })
}

export const handlePrismaInvalidation = async (params) => {
  const model = params.model
  const action = params.action
  // simple where with id
  const id = params.args?.where?.id
  // handles updateMany where id is in a list
  const ids = params.args?.where?.id?.in

  const isActionToInvalidate = ACTIONS_TO_INVALIDATE.includes(action)

  if (isActionToInvalidate && model && id) {
    const isModelToInvalidate = MODELS_TO_INVALIDATE.includes(model)

    if (isActionToInvalidate && isModelToInvalidate) {
      const entitiesToInvalidate = []

      if (ids) {
        ids.forEach((id) => {
          entitiesToInvalidate.push(
            buildPrismaEntityToInvalidate({ model, id })
          )
        })
      } else {
        entitiesToInvalidate.push(buildPrismaEntityToInvalidate({ model, id }))
      }

      logger.debug(
        { action, model, entitiesToInvalidate },
        'Invalidating model'
      )
      await cache.invalidate(entitiesToInvalidate)
    }
  }
}
