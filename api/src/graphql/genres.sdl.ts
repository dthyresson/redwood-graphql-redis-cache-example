export const schema = gql`
  type Genre {
    id: Int!
    name: String
    track: [Track]!
  }

  type Query {
    genres: [Genre!]! @requireAuth
    genre(id: Int!): Genre @requireAuth
  }

  input CreateGenreInput {
    name: String
  }

  input UpdateGenreInput {
    name: String
  }

  type Mutation {
    createGenre(input: CreateGenreInput!): Genre! @requireAuth
    updateGenre(id: Int!, input: UpdateGenreInput!): Genre! @requireAuth
    deleteGenre(id: Int!): Genre! @requireAuth
  }
`
