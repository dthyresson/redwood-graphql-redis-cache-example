import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MediaTypeCreateArgs>({
  mediaType: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard
