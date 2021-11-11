import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GenreCreateArgs>({
  genre: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard
