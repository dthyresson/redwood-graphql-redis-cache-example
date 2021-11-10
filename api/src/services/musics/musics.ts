import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const musics = () => {
  return db.music.findMany({
    where: { artistHotttnesss: { gte: 0.5 } },
    orderBy: { artistHotttnesss: 'desc' },
  })
}

export const music = ({ id }: Prisma.MusicWhereUniqueInput) => {
  return db.music.findUnique({
    where: { id },
  })
}

interface CreateMusicArgs {
  input: Prisma.MusicCreateInput
}

export const createMusic = ({ input }: CreateMusicArgs) => {
  return db.music.create({
    data: input,
  })
}

interface UpdateMusicArgs extends Prisma.MusicWhereUniqueInput {
  input: Prisma.MusicUpdateInput
}

export const updateMusic = ({ id, input }: UpdateMusicArgs) => {
  return db.music.update({
    data: input,
    where: { id },
  })
}

export const deleteMusic = ({ id }: Prisma.MusicWhereUniqueInput) => {
  return db.music.delete({
    where: { id },
  })
}
