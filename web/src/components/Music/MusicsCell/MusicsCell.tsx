import type { FindMusics } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Musics from 'src/components/Music/Musics'

export const QUERY = gql`
  query FindMusics {
    musics {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No musics yet. '}
      <Link
        to={routes.newMusic()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ musics }: CellSuccessProps<FindMusics>) => {
  return <Musics musics={musics} />
}
