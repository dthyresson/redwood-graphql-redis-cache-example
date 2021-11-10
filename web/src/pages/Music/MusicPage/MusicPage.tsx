import MusicCell from 'src/components/Music/MusicCell'

type MusicPageProps = {
  id: Int
}

const MusicPage = ({ id }: MusicPageProps) => {
  return <MusicCell id={id} />
}

export default MusicPage
