export const schema = gql`
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

  type Query {
    tracks: [Track!]! @requireAuth
    track(id: Int!): Track @requireAuth
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
