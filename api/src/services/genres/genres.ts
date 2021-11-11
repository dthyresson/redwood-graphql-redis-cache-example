import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const genres = () => {
  return db.genre.findMany()
}

export const genre = ({ id }: Prisma.GenreWhereUniqueInput) => {
  return db.genre.findUnique({
    where: { id },
  })
}

interface CreateGenreArgs {
  input: Prisma.GenreCreateInput
}

export const createGenre = ({ input }: CreateGenreArgs) => {
  return db.genre.create({
    data: input,
  })
}

interface UpdateGenreArgs extends Prisma.GenreWhereUniqueInput {
  input: Prisma.GenreUpdateInput
}

export const updateGenre = ({ id, input }: UpdateGenreArgs) => {
  return db.genre.update({
    data: input,
    where: { id },
  })
}

interface GenreUpdateManyArgs extends Prisma.GenreUpdateManyArgs {
  ids: [number]
  input: Prisma.GenreUpdateInput
}

export const updateManyGenre = ({ ids, input }: GenreUpdateManyArgs) => {
  return db.genre.updateMany({
    data: input,
    where: { id: { in: ids } },
  })
}

export const deleteGenre = ({ id }: Prisma.GenreWhereUniqueInput) => {
  return db.genre.delete({
    where: { id },
  })
}

interface GenreDeleteManyArgs {
  ids: [number]
}

export const deleteManyGenre = ({ ids }: GenreDeleteManyArgs) => {
  return db.genre.deleteMany({
    where: { id: { in: ids } },
  })
}
