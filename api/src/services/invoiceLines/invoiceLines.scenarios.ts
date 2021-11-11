import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceLineCreateArgs>({
  invoiceLine: {
    one: {
      data: {
        unitPrice: 6468192.700844812,
        quantity: 2877330,
        invoice: {
          create: {
            invoiceDate: '2021-11-11T16:34:42Z',
            total: 4572748.295398706,
            customer: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String',
              },
            },
          },
        },
        track: {
          create: {
            name: 'String',
            milliseconds: 9159026,
            unitPrice: 8211241.623590888,
            mediaType: { create: {} },
          },
        },
      },
    },
    two: {
      data: {
        unitPrice: 7182440.130092731,
        quantity: 6255817,
        invoice: {
          create: {
            invoiceDate: '2021-11-11T16:34:42Z',
            total: 6502130.277638618,
            customer: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String',
              },
            },
          },
        },
        track: {
          create: {
            name: 'String',
            milliseconds: 7557701,
            unitPrice: 699173.151536494,
            mediaType: { create: {} },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
