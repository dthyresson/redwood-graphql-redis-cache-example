export const schema = gql`
  type Music {
    id: Int!
    artistFamiliarity: Float!
    artistHotttnesss: Float!
    artistId: String!
    artistLatitude: Float!
    artistLocation: Int!
    artistLongitude: Float!
    artistName: String!
    artistSimilar: Float!
    artistTerms: String!
    artistTermsFreq: Float!
    releaseId: Int!
    releaseName: Int!
    songArtistMbtags: Float!
    songArtistMbtagsCount: Float!
    songBarsConfidence: Float!
    songBarsStart: Float!
    songBeatsConfidence: Float!
    songBeatsStart: Float!
    songDuration: Float!
    songEndOfFadeIn: Float!
    songHotttnesss: Float!
    songId: String!
    songKey: Float!
    songKeyConfidence: Float!
    songLoudness: Float!
    songMode: Int!
    songModeConfidence: Float!
    songStartOfFadeOut: Float!
    songTatumsConfidence: Float!
    songTatumsStart: Float!
    songTempo: Float!
    songTimeSignature: Float!
    songTimeSignatureConfidence: Float!
    songTitle: Int!
    songYear: Int!
  }

  type Query {
    musics: [Music!]! @requireAuth
    music(id: Int!): Music @requireAuth
  }

  input CreateMusicInput {
    artistFamiliarity: Float!
    artistHotttnesss: Float!
    artistId: String!
    artistLatitude: Float!
    artistLocation: Int!
    artistLongitude: Float!
    artistName: String!
    artistSimilar: Float!
    artistTerms: String!
    artistTermsFreq: Float!
    releaseId: Int!
    releaseName: Int!
    songArtistMbtags: Float!
    songArtistMbtagsCount: Float!
    songBarsConfidence: Float!
    songBarsStart: Float!
    songBeatsConfidence: Float!
    songBeatsStart: Float!
    songDuration: Float!
    songEndOfFadeIn: Float!
    songHotttnesss: Float!
    songId: String!
    songKey: Float!
    songKeyConfidence: Float!
    songLoudness: Float!
    songMode: Int!
    songModeConfidence: Float!
    songStartOfFadeOut: Float!
    songTatumsConfidence: Float!
    songTatumsStart: Float!
    songTempo: Float!
    songTimeSignature: Float!
    songTimeSignatureConfidence: Float!
    songTitle: Int!
    songYear: Int!
  }

  input UpdateMusicInput {
    artistFamiliarity: Float
    artistHotttnesss: Float
    artistId: String
    artistLatitude: Float
    artistLocation: Int
    artistLongitude: Float
    artistName: String
    artistSimilar: Float
    artistTerms: String
    artistTermsFreq: Float
    releaseId: Int
    releaseName: Int
    songArtistMbtags: Float
    songArtistMbtagsCount: Float
    songBarsConfidence: Float
    songBarsStart: Float
    songBeatsConfidence: Float
    songBeatsStart: Float
    songDuration: Float
    songEndOfFadeIn: Float
    songHotttnesss: Float
    songId: String
    songKey: Float
    songKeyConfidence: Float
    songLoudness: Float
    songMode: Int
    songModeConfidence: Float
    songStartOfFadeOut: Float
    songTatumsConfidence: Float
    songTatumsStart: Float
    songTempo: Float
    songTimeSignature: Float
    songTimeSignatureConfidence: Float
    songTitle: Int
    songYear: Int
  }

  type Mutation {
    createMusic(input: CreateMusicInput!): Music! @requireAuth
    updateMusic(id: Int!, input: UpdateMusicInput!): Music! @requireAuth
    deleteMusic(id: Int!): Music! @requireAuth
  }
`
