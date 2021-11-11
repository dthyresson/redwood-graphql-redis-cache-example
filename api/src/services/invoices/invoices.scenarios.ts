import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceCreateArgs>({
  invoice: {
    one: {
      data: {
        invoiceDate: '2021-11-11T16:34:38Z',
        total: 37846.280854956225,
        customer: {
          create: { firstName: 'String', lastName: 'String', email: 'String' },
        },
      },
    },
    two: {
      data: {
        invoiceDate: '2021-11-11T16:34:38Z',
        total: 132938.14145280968,
        customer: {
          create: { firstName: 'String', lastName: 'String', email: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
