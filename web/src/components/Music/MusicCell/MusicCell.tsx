import type { FindMusicById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Music from 'src/components/Music/Music'

export const QUERY = gql`
  query FindMusicById($id: Int!) {
    music: music(id: $id) {
      id
      artistFamiliarity
      artistHotttnesss
      artistId
      artistLatitude
      artistLocation
      artistLongitude
      artistName
      artistSimilar
      artistTerms
      artistTermsFreq
      releaseId
      releaseName
      songArtistMbtags
      songArtistMbtagsCount
      songBarsConfidence
      songBarsStart
      songBeatsConfidence
      songBeatsStart
      songDuration
      songEndOfFadeIn
      songHotttnesss
      songId
      songKey
      songKeyConfidence
      songLoudness
      songMode
      songModeConfidence
      songStartOfFadeOut
      songTatumsConfidence
      songTatumsStart
      songTempo
      songTimeSignature
      songTimeSignatureConfidence
      songTitle
      songYear
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Music not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ music }: CellSuccessProps<FindMusicById>) => {
  return <Music music={music} />
}
