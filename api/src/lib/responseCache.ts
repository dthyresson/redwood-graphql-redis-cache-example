import { createRedisCache } from '@envelop/response-cache-redis'

import { logger } from './logger'
import { redis } from 'src/lib/redis'

const EXPIRE_IN_SECONDS =
  (process.env.EXPIRE_IN_SECONDS && parseInt(process.env.EXPIRE_IN_SECONDS)) ||
  30

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
  ttl: EXPIRE_IN_SECONDS * 1000,
}

const ACTIONS_TO_INVALIDATE = ['update', 'updateMany', 'upsert', 'delete']
const MODELS_TO_INVALIDATE = ['Music']

export const buildEntityToInvalidate = ({ model, id }) => {
  return { typename: model, id }
}

export const buildEntitiesToInvalidate = ({ model, ids }) => {
  return ids.map((id) => {
    return buildEntityToInvalidate({ model, id })
  })
}

export const handlePrismaInvalidation = async (params) => {
  const model = params.model
  const action = params.action
  // note: not correct for updateMany
  // @todo: get all ids and build a collection of invalidation entities
  const id = params.args?.where?.id

  const isActionToInvalidate = ACTIONS_TO_INVALIDATE.includes(action)

  if (isActionToInvalidate && model && id) {
    const isModelToInvalidate = MODELS_TO_INVALIDATE.includes(model)

    if (isActionToInvalidate && isModelToInvalidate) {
      logger.debug({ action, model, id }, 'Invalidating model')
      await cache.invalidate([buildEntityToInvalidate({ model, id })])
    }
  }
}
