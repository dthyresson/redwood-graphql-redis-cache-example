import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CustomerCreateArgs>({
  customer: {
    one: { data: { firstName: 'String', lastName: 'String', email: 'String' } },
    two: { data: { firstName: 'String', lastName: 'String', email: 'String' } },
  },
})

export type StandardScenario = typeof standard
