import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const playlists = () => {
  return db.playlist.findMany({
    include: {
      tracks: { include: { album: { include: { artist: true } } } },
    },
  })
}

export const playlist = ({ id }: Prisma.PlaylistWhereUniqueInput) => {
  return db.playlist.findUnique({
    include: { tracks: { include: { album: { include: { artist: true } } } } },
    where: { id },
  })
}

interface CreatePlaylistArgs {
  input: Prisma.PlaylistCreateInput
}

export const createPlaylist = ({ input }: CreatePlaylistArgs) => {
  return db.playlist.create({
    data: input,
  })
}

interface UpdatePlaylistArgs extends Prisma.PlaylistWhereUniqueInput {
  input: Prisma.PlaylistUpdateInput
}

export const updatePlaylist = ({ id, input }: UpdatePlaylistArgs) => {
  return db.playlist.update({
    data: input,
    where: { id },
  })
}

export const deletePlaylist = ({ id }: Prisma.PlaylistWhereUniqueInput) => {
  return db.playlist.delete({
    where: { id },
  })
}

export const Playlist = {
  tracks: (obj, { root }: ResolverArgs<ReturnType<typeof playlist>>) =>
    db.playlist.findUnique({ where: { id: root.id } }).tracks(),
}
