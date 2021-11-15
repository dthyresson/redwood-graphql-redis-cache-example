import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PlayListWithTracksCell from 'src/components/Playlist/PlaylistCell'
const HomePage = ({ id }) => {
  const { first, after } = useParams()
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <PlayListWithTracksCell
        id={id || 16}
        first={(first && parseInt(first)) || 100}
        after={after}
      />
    </>
  )
}

export default HomePage
