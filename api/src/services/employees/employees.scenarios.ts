import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeeCreateArgs>({
  employee: {
    one: { data: { lastName: 'String', firstName: 'String' } },
    two: { data: { lastName: 'String', firstName: 'String' } },
  },
})

export type StandardScenario = typeof standard
