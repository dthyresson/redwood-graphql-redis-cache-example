import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const mediaTypes = () => {
  return db.mediaType.findMany()
}

export const mediaType = ({ id }: Prisma.MediaTypeWhereUniqueInput) => {
  return db.mediaType.findUnique({
    where: { id },
  })
}

interface CreateMediaTypeArgs {
  input: Prisma.MediaTypeCreateInput
}

export const createMediaType = ({ input }: CreateMediaTypeArgs) => {
  return db.mediaType.create({
    data: input,
  })
}

interface UpdateMediaTypeArgs extends Prisma.MediaTypeWhereUniqueInput {
  input: Prisma.MediaTypeUpdateInput
}

export const updateMediaType = ({ id, input }: UpdateMediaTypeArgs) => {
  return db.mediaType.update({
    data: input,
    where: { id },
  })
}

export const deleteMediaType = ({ id }: Prisma.MediaTypeWhereUniqueInput) => {
  return db.mediaType.delete({
    where: { id },
  })
}

export const MediaType = {
  track: (_obj, { root }: ResolverArgs<ReturnType<typeof mediaType>>) =>
    db.mediaType.findUnique({ where: { id: root.id } }).track(),
}
