import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

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

export const deleteGenre = ({ id }: Prisma.GenreWhereUniqueInput) => {
  return db.genre.delete({
    where: { id },
  })
}

export const Genre = {
  track: (_obj, { root }: ResolverArgs<ReturnType<typeof genre>>) =>
    db.genre.findUnique({ where: { id: root.id } }).track(),
}
