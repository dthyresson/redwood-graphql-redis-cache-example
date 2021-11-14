import { Plugin } from '@envelop/core'

import { logger } from 'src/lib/logger'

/**
 * This Envelop plugin enriches the context on a per-request basis
 * by populating it with the results of a custom function
 * @returns
 */
export const useResponseCacheMetrics = (): Plugin => {
  logger.debug('>>>> useResponseCacheMetrics')
  return {
    async onExecute() {
      return {
        onExecuteDone({ result, setResult, args }) {
          const ctx = args.contextValue['_envelopTracing']
          const extensions = result['extensions']
          const responseCache = extensions && extensions['responseCache']
          const envelopTracing = extensions && extensions['envelopTracing']
          const data = result['data']

          logger.debug(
            { extensions, responseCache, envelopTracing, ctx },
            '>>>> useResponseCacheMetrics info'
          )

          const response = {
            data: {
              ...data,
              metrics: {
                ...responseCache,
                ...ctx,
                __typename: 'Metrics',
              },
            },
            extensions,
          }

          setResult(response)
        },
      }
    },
  }
}
