// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import {
  handlePrismaInvalidation,
  isPrismaMiddlewareInvalidationEnabled,
} from './responseCache'
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

if (isPrismaMiddlewareInvalidationEnabled) {
  db.$use(async (params, next) => {
    await handlePrismaInvalidation(params)
    const result = await next(params)
    return result
  })
}
