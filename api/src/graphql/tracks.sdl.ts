export const schema = gql`
  type PageInfo {
    startCursor: String!
    endCursor: String!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  type TrackEdge {
    node: Track!
    cursor: String!
    playlist: Playlist
  }

  type TrackConnection {
    edges: [TrackEdge]
    pageInfo: PageInfo!
    totalCount: Int
  }

  type Track {
    id: Int!
    name: String!
    albumId: Int
    mediaTypeId: Int!
    genreId: Int
    composer: String
    milliseconds: Int!
    bytes: Int
    unitPrice: Float!
    album: Album
    genre: Genre
    mediaType: MediaType!
    invoiceLine: [InvoiceLine]!
    playlists: [Playlist]!
  }

  type PlayListWithTracksQuery {
    playlist: Playlist!
    tracks: TrackConnection
  }

  type Query {
    tracks(
      first: Int
      last: Int
      before: String
      after: String
    ): TrackConnection @skipAuth
    tracksForPlaylist(
      id: Int!
      first: Int
      last: Int
      before: String
      after: String
    ): TrackConnection @skipAuth
    track(id: Int!): Track @skipAuth
  }

  input CreateTrackInput {
    name: String!
    albumId: Int
    mediaTypeId: Int!
    genreId: Int
    composer: String
    milliseconds: Int!
    bytes: Int
    unitPrice: Float!
  }

  input UpdateTrackInput {
    name: String
    albumId: Int
    mediaTypeId: Int
    genreId: Int
    composer: String
    milliseconds: Int
    bytes: Int
    unitPrice: Float
  }

  type Mutation {
    createTrack(input: CreateTrackInput!): Track! @requireAuth
    updateTrack(id: Int!, input: UpdateTrackInput!): Track! @requireAuth
    deleteTrack(id: Int!): Track! @requireAuth
  }
`
