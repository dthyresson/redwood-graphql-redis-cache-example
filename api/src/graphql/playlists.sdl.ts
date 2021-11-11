export const schema = gql`
  type Playlist {
    id: Int!
    name: String
    tracks: [Track]!
  }

  type Query {
    playlists: [Playlist!]! @skipAuth
    playlist(id: Int!): Playlist @skipAuth
  }

  input CreatePlaylistInput {
    name: String
  }

  input UpdatePlaylistInput {
    name: String
  }

  type Mutation {
    createPlaylist(input: CreatePlaylistInput!): Playlist! @requireAuth
    updatePlaylist(id: Int!, input: UpdatePlaylistInput!): Playlist!
      @requireAuth
    deletePlaylist(id: Int!): Playlist! @requireAuth
  }
`
