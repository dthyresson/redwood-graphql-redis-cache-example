import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ArtistCreateArgs>({
  artist: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard
