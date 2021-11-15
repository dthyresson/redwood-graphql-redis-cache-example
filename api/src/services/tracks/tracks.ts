import type { Prisma } from '@prisma/client'
import {
  findManyCursorConnection,
  ConnectionArguments,
} from '@devoxa/prisma-relay-cursor-connection'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
// import { logger } from 'src/lib/logger'

interface TrackCursorId {
  id: number
}

export const tracks = async (args: ConnectionArguments) => {
  return await findManyCursorConnection<TrackCursorId, TrackCursorId>(
    (args) =>
      db.track.findMany({
        ...args,
      }),
    () => db.track.count(),
    args,
    {
      getCursor: (record) => ({ id: record.id }),
      encodeCursor: (cursor) =>
        Buffer.from(JSON.stringify(cursor)).toString('base64'),
      decodeCursor: (cursor) =>
        JSON.parse(Buffer.from(cursor, 'base64').toString('ascii')),
    }
  )
}

export const tracksForPlaylist = async ({
  id,
  ...args
}: Prisma.PlaylistWhereUniqueInput & ConnectionArguments) => {
  const baseArgs = { where: { playlists: { some: { id } } } }

  return await findManyCursorConnection<TrackCursorId, TrackCursorId>(
    (args) =>
      db.track.findMany({
        ...args,
        ...baseArgs,
        include: {
          genre: true,
          mediaType: true,
          album: { include: { artist: true } },
        },
      }),
    () => db.track.count({ ...baseArgs }),
    args,
    {
      getCursor: (record) => ({ id: record.id }),
      encodeCursor: (cursor) =>
        Buffer.from(JSON.stringify(cursor)).toString('base64'),
      decodeCursor: (cursor) =>
        JSON.parse(Buffer.from(cursor, 'base64').toString('ascii')),
    }
  )
}

export const track = ({ id }: Prisma.TrackWhereUniqueInput) => {
  return db.track.findUnique({
    where: { id },
  })
}

interface CreateTrackArgs {
  input: Prisma.TrackCreateInput
}

export const createTrack = ({ input }: CreateTrackArgs) => {
  return db.track.create({
    data: input,
  })
}

interface UpdateTrackArgs extends Prisma.TrackWhereUniqueInput {
  input: Prisma.TrackUpdateInput
}

export const updateTrack = ({ id, input }: UpdateTrackArgs) => {
  return db.track.update({
    data: input,
    where: { id },
  })
}

export const deleteTrack = ({ id }: Prisma.TrackWhereUniqueInput) => {
  return db.track.delete({
    where: { id },
  })
}

export const Track = {
  album: (_obj, { root }: ResolverArgs<ReturnType<typeof track>>) =>
    db.track.findUnique({ where: { id: root.id } }).album(),
  genre: (_obj, { root }: ResolverArgs<ReturnType<typeof track>>) =>
    db.track.findUnique({ where: { id: root.id } }).genre(),
  mediaType: (_obj, { root }: ResolverArgs<ReturnType<typeof track>>) =>
    db.track.findUnique({ where: { id: root.id } }).mediaType(),
  invoiceLine: (_obj, { root }: ResolverArgs<ReturnType<typeof track>>) =>
    db.track.findUnique({ where: { id: root.id } }).invoiceLine(),
  playlists: (_obj, { root }: ResolverArgs<ReturnType<typeof track>>) =>
    db.track.findUnique({ where: { id: root.id } }).playlists(),
}
