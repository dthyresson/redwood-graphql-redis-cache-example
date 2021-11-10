import { createRedisCache } from '@envelop/response-cache-redis'
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
