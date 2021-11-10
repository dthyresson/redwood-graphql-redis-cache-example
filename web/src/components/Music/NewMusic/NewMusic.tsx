import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MusicForm from 'src/components/Music/MusicForm'

const CREATE_MUSIC_MUTATION = gql`
  mutation CreateMusicMutation($input: CreateMusicInput!) {
    createMusic(input: $input) {
      id
    }
  }
`

const NewMusic = () => {
  const [createMusic, { loading, error }] = useMutation(CREATE_MUSIC_MUTATION, {
    onCompleted: () => {
      toast.success('Music created')
      navigate(routes.musics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { releaseId: parseInt(input.releaseId), })
    createMusic({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Music</h2>
      </header>
      <div className="rw-segment-main">
        <MusicForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMusic
