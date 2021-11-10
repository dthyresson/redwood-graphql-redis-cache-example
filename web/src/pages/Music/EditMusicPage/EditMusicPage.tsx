import EditMusicCell from 'src/components/Music/EditMusicCell'

type MusicPageProps = {
  id: number
}

const EditMusicPage = ({ id }: MusicPageProps) => {
  return <EditMusicCell id={id} />
}

export default EditMusicPage
