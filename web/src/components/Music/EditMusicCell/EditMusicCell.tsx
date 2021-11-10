import type { EditMusicById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MusicForm from 'src/components/Music/MusicForm'

export const QUERY = gql`
  query EditMusicById($id: Int!) {
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
const UPDATE_MUSIC_MUTATION = gql`
  mutation UpdateMusicMutation($id: Int!, $input: UpdateMusicInput!) {
    updateMusic(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ music }: CellSuccessProps<EditMusicById>) => {
  const [updateMusic, { loading, error }] = useMutation(UPDATE_MUSIC_MUTATION, {
    onCompleted: () => {
      toast.success('Music updated')
      navigate(routes.musics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { releaseId: parseInt(input.releaseId), })
    updateMusic({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Music {music.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MusicForm music={music} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
