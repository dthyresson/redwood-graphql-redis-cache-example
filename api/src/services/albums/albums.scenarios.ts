import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AlbumCreateArgs>({
  album: {
    one: { data: { title: 'String', artist: { create: {} } } },
    two: { data: { title: 'String', artist: { create: {} } } },
  },
})

export type StandardScenario = typeof standard
