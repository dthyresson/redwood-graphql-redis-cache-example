export const schema = gql`
  type Artist {
    id: Int!
    name: String
    album: [Album]!
  }

  type Query {
    artists: [Artist!]! @skipAuth
    artist(id: Int!): Artist @skipAuth
  }

  input CreateArtistInput {
    name: String
  }

  input UpdateArtistInput {
    name: String
  }

  type Mutation {
    createArtist(input: CreateArtistInput!): Artist! @requireAuth
    updateArtist(id: Int!, input: UpdateArtistInput!): Artist! @requireAuth
    deleteArtist(id: Int!): Artist! @requireAuth
  }
`
