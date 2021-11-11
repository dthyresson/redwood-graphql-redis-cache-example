export const schema = gql`
  type MediaType {
    id: Int!
    name: String
    track: [Track]!
  }

  type Query {
    mediaTypes: [MediaType!]! @requireAuth
    mediaType(id: Int!): MediaType @requireAuth
  }

  input CreateMediaTypeInput {
    name: String
  }

  input UpdateMediaTypeInput {
    name: String
  }

  type Mutation {
    createMediaType(input: CreateMediaTypeInput!): MediaType! @requireAuth
    updateMediaType(id: Int!, input: UpdateMediaTypeInput!): MediaType!
      @requireAuth
    deleteMediaType(id: Int!): MediaType! @requireAuth
  }
`
