import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const artists = () => {
  return db.artist.findMany()
}

export const artist = ({ id }: Prisma.ArtistWhereUniqueInput) => {
  return db.artist.findUnique({
    where: { id },
  })
}

interface CreateArtistArgs {
  input: Prisma.ArtistCreateInput
}

export const createArtist = ({ input }: CreateArtistArgs) => {
  return db.artist.create({
    data: input,
  })
}

interface UpdateArtistArgs extends Prisma.ArtistWhereUniqueInput {
  input: Prisma.ArtistUpdateInput
}

export const updateArtist = ({ id, input }: UpdateArtistArgs) => {
  return db.artist.update({
    data: input,
    where: { id },
  })
}

export const deleteArtist = ({ id }: Prisma.ArtistWhereUniqueInput) => {
  return db.artist.delete({
    where: { id },
  })
}

export const Artist = {
  album: (_obj, { root }: ResolverArgs<ReturnType<typeof artist>>) =>
    db.artist.findUnique({ where: { id: root.id } }).album(),
}
