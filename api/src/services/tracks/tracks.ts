import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tracks = () => {
  return db.track.findMany()
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
