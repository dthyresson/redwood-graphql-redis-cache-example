import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const albums = () => {
  return db.album.findMany()
}

export const album = ({ id }: Prisma.AlbumWhereUniqueInput) => {
  return db.album.findUnique({
    where: { id },
  })
}

interface CreateAlbumArgs {
  input: Prisma.AlbumCreateInput
}

export const createAlbum = ({ input }: CreateAlbumArgs) => {
  return db.album.create({
    data: input,
  })
}

interface UpdateAlbumArgs extends Prisma.AlbumWhereUniqueInput {
  input: Prisma.AlbumUpdateInput
}

export const updateAlbum = ({ id, input }: UpdateAlbumArgs) => {
  return db.album.update({
    data: input,
    where: { id },
  })
}

export const deleteAlbum = ({ id }: Prisma.AlbumWhereUniqueInput) => {
  return db.album.delete({
    where: { id },
  })
}

export const Album = {
  artist: (_obj, { root }: ResolverArgs<ReturnType<typeof album>>) =>
    db.album.findUnique({ where: { id: root.id } }).artist(),
  track: (_obj, { root }: ResolverArgs<ReturnType<typeof album>>) =>
    db.album.findUnique({ where: { id: root.id } }).track(),
}
