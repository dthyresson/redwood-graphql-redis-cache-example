import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Music/MusicsCell'

const DELETE_MUSIC_MUTATION = gql`
  mutation DeleteMusicMutation($id: Int!) {
    deleteMusic(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MusicsList = ({ musics }) => {
  const [deleteMusic] = useMutation(DELETE_MUSIC_MUTATION, {
    onCompleted: () => {
      toast.success('Music deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete music ' + id + '?')) {
      deleteMusic({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Artist familiarity</th>
            <th>Artist hotttnesss</th>
            <th>Artist id</th>
            <th>Artist latitude</th>
            <th>Artist location</th>
            <th>Artist longitude</th>
            <th>Artist name</th>
            <th>Artist similar</th>
            <th>Artist terms</th>
            <th>Artist terms freq</th>
            <th>Release id</th>
            <th>Release name</th>
            <th>Song artist mbtags</th>
            <th>Song artist mbtags count</th>
            <th>Song bars confidence</th>
            <th>Song bars start</th>
            <th>Song beats confidence</th>
            <th>Song beats start</th>
            <th>Song duration</th>
            <th>Song end of fade in</th>
            <th>Song hotttnesss</th>
            <th>Song id</th>
            <th>Song key</th>
            <th>Song key confidence</th>
            <th>Song loudness</th>
            <th>Song mode</th>
            <th>Song mode confidence</th>
            <th>Song start of fade out</th>
            <th>Song tatums confidence</th>
            <th>Song tatums start</th>
            <th>Song tempo</th>
            <th>Song time signature</th>
            <th>Song time signature confidence</th>
            <th>Song title</th>
            <th>Song year</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {musics.map((music) => (
            <tr key={music.id}>
              <td>{truncate(music.id)}</td>
              <td>{truncate(music.artistFamiliarity)}</td>
              <td>{truncate(music.artistHotttnesss)}</td>
              <td>{truncate(music.artistId)}</td>
              <td>{truncate(music.artistLatitude)}</td>
              <td>{truncate(music.artistLocation)}</td>
              <td>{truncate(music.artistLongitude)}</td>
              <td>{truncate(music.artistName)}</td>
              <td>{truncate(music.artistSimilar)}</td>
              <td>{truncate(music.artistTerms)}</td>
              <td>{truncate(music.artistTermsFreq)}</td>
              <td>{truncate(music.releaseId)}</td>
              <td>{truncate(music.releaseName)}</td>
              <td>{truncate(music.songArtistMbtags)}</td>
              <td>{truncate(music.songArtistMbtagsCount)}</td>
              <td>{truncate(music.songBarsConfidence)}</td>
              <td>{truncate(music.songBarsStart)}</td>
              <td>{truncate(music.songBeatsConfidence)}</td>
              <td>{truncate(music.songBeatsStart)}</td>
              <td>{truncate(music.songDuration)}</td>
              <td>{truncate(music.songEndOfFadeIn)}</td>
              <td>{truncate(music.songHotttnesss)}</td>
              <td>{truncate(music.songId)}</td>
              <td>{truncate(music.songKey)}</td>
              <td>{truncate(music.songKeyConfidence)}</td>
              <td>{truncate(music.songLoudness)}</td>
              <td>{truncate(music.songMode)}</td>
              <td>{truncate(music.songModeConfidence)}</td>
              <td>{truncate(music.songStartOfFadeOut)}</td>
              <td>{truncate(music.songTatumsConfidence)}</td>
              <td>{truncate(music.songTatumsStart)}</td>
              <td>{truncate(music.songTempo)}</td>
              <td>{truncate(music.songTimeSignature)}</td>
              <td>{truncate(music.songTimeSignatureConfidence)}</td>
              <td>{truncate(music.songTitle)}</td>
              <td>{truncate(music.songYear)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.music({ id: music.id })}
                    title={'Show music ' + music.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMusic({ id: music.id })}
                    title={'Edit music ' + music.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete music ' + music.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(music.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MusicsList
