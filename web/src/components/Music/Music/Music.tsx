import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MUSIC_MUTATION = gql`
  mutation DeleteMusicMutation($id: Int!) {
    deleteMusic(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Music = ({ music }) => {
  const [deleteMusic] = useMutation(DELETE_MUSIC_MUTATION, {
    onCompleted: () => {
      toast.success('Music deleted')
      navigate(routes.musics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete music ' + id + '?')) {
      deleteMusic({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Music {music.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{music.id}</td>
            </tr><tr>
              <th>Artist familiarity</th>
              <td>{music.artistFamiliarity}</td>
            </tr><tr>
              <th>Artist hotttnesss</th>
              <td>{music.artistHotttnesss}</td>
            </tr><tr>
              <th>Artist id</th>
              <td>{music.artistId}</td>
            </tr><tr>
              <th>Artist latitude</th>
              <td>{music.artistLatitude}</td>
            </tr><tr>
              <th>Artist location</th>
              <td>{music.artistLocation}</td>
            </tr><tr>
              <th>Artist longitude</th>
              <td>{music.artistLongitude}</td>
            </tr><tr>
              <th>Artist name</th>
              <td>{music.artistName}</td>
            </tr><tr>
              <th>Artist similar</th>
              <td>{music.artistSimilar}</td>
            </tr><tr>
              <th>Artist terms</th>
              <td>{music.artistTerms}</td>
            </tr><tr>
              <th>Artist terms freq</th>
              <td>{music.artistTermsFreq}</td>
            </tr><tr>
              <th>Release id</th>
              <td>{music.releaseId}</td>
            </tr><tr>
              <th>Release name</th>
              <td>{music.releaseName}</td>
            </tr><tr>
              <th>Song artist mbtags</th>
              <td>{music.songArtistMbtags}</td>
            </tr><tr>
              <th>Song artist mbtags count</th>
              <td>{music.songArtistMbtagsCount}</td>
            </tr><tr>
              <th>Song bars confidence</th>
              <td>{music.songBarsConfidence}</td>
            </tr><tr>
              <th>Song bars start</th>
              <td>{music.songBarsStart}</td>
            </tr><tr>
              <th>Song beats confidence</th>
              <td>{music.songBeatsConfidence}</td>
            </tr><tr>
              <th>Song beats start</th>
              <td>{music.songBeatsStart}</td>
            </tr><tr>
              <th>Song duration</th>
              <td>{music.songDuration}</td>
            </tr><tr>
              <th>Song end of fade in</th>
              <td>{music.songEndOfFadeIn}</td>
            </tr><tr>
              <th>Song hotttnesss</th>
              <td>{music.songHotttnesss}</td>
            </tr><tr>
              <th>Song id</th>
              <td>{music.songId}</td>
            </tr><tr>
              <th>Song key</th>
              <td>{music.songKey}</td>
            </tr><tr>
              <th>Song key confidence</th>
              <td>{music.songKeyConfidence}</td>
            </tr><tr>
              <th>Song loudness</th>
              <td>{music.songLoudness}</td>
            </tr><tr>
              <th>Song mode</th>
              <td>{music.songMode}</td>
            </tr><tr>
              <th>Song mode confidence</th>
              <td>{music.songModeConfidence}</td>
            </tr><tr>
              <th>Song start of fade out</th>
              <td>{music.songStartOfFadeOut}</td>
            </tr><tr>
              <th>Song tatums confidence</th>
              <td>{music.songTatumsConfidence}</td>
            </tr><tr>
              <th>Song tatums start</th>
              <td>{music.songTatumsStart}</td>
            </tr><tr>
              <th>Song tempo</th>
              <td>{music.songTempo}</td>
            </tr><tr>
              <th>Song time signature</th>
              <td>{music.songTimeSignature}</td>
            </tr><tr>
              <th>Song time signature confidence</th>
              <td>{music.songTimeSignatureConfidence}</td>
            </tr><tr>
              <th>Song title</th>
              <td>{music.songTitle}</td>
            </tr><tr>
              <th>Song year</th>
              <td>{music.songYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMusic({ id: music.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(music.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Music
