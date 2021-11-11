import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TrackCreateArgs>({
  track: {
    one: {
      data: {
        name: 'String',
        milliseconds: 3540335,
        unitPrice: 2314911.8819396365,
        mediaType: { create: {} },
      },
    },
    two: {
      data: {
        name: 'String',
        milliseconds: 4366211,
        unitPrice: 8090060.769456204,
        mediaType: { create: {} },
      },
    },
  },
})

export type StandardScenario = typeof standard
