// Use the Response Cache envelop plugin with a Redis Cache
import { useResponseCache } from '@envelop/response-cache'
import { useTiming } from '@envelop/core'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { responseCacheConfig } from 'src/lib/responseCache'
import { useResponseCacheMetrics } from 'src/lib/useResponseCacheMetrics'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: { operationName: true, tracing: true, query: true },
  },
  directives,
  sdls,
  services,
  extraPlugins: [
    useResponseCache(responseCacheConfig),
    useTiming(),
    useResponseCacheMetrics(),
  ],
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
