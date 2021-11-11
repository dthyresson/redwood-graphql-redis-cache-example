export const schema = gql`
  type Genre {
    id: Int!
    name: String
    track: [Track]!
  }

  type Query {
    genres: [Genre!]! @skipAuth
    genre(id: Int!): Genre @skipAuth
  }

  input CreateGenreInput {
    name: String
  }

  input UpdateGenreInput {
    name: String
  }

  type BatchPayload {
    count: Int
  }

  type Mutation {
    createGenre(input: CreateGenreInput!): Genre! @requireAuth
    updateGenre(id: Int!, input: UpdateGenreInput!): Genre! @requireAuth
    updateManyGenre(ids: [Int]!, input: UpdateGenreInput!): BatchPayload!
      @requireAuth
    deleteGenre(id: Int!): Genre! @requireAuth
    deleteManyGenre(ids: [Int]!): BatchPayload! @requireAuth
  }
`
