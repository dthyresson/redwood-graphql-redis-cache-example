export const schema = gql`
  type Album {
    id: Int!
    title: String!
    artistId: Int!
    artist: Artist!
    track: [Track]!
  }

  type Query {
    albums: [Album!]! @requireAuth
    album(id: Int!): Album @requireAuth
  }

  input CreateAlbumInput {
    title: String!
    artistId: Int!
  }

  input UpdateAlbumInput {
    title: String
    artistId: Int
  }

  type Mutation {
    createAlbum(input: CreateAlbumInput!): Album! @requireAuth
    updateAlbum(id: Int!, input: UpdateAlbumInput!): Album! @requireAuth
    deleteAlbum(id: Int!): Album! @requireAuth
  }
`
