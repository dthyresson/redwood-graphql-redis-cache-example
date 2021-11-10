// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['query', 'info', 'warn', 'error']),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: ['query', 'info', 'warn', 'error'],
})

const shouldInvalidate = (action) => {
  return action === 'update' || action === 'updateMany' || action === 'upsert'
}

db.$use(async (params, next) => {
  const model = params.model
  const action = params.action

  logger.debug(params, 'Prisma middleware')
  if (shouldInvalidate(action)) {
    switch (params.model) {
      case 'Music': {
        // invalidate
        logger.debug({ action, model }, 'Invalidate!')
      }
    }
  }
  const result = await next(params)
  // See results here
  return result
})
