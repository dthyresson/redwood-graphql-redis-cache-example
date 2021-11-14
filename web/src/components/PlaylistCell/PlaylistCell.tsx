import { ClockIcon, MusicNoteIcon, UsersIcon } from '@heroicons/react/solid'

import { SaveIcon } from '@heroicons/react/outline'

import type { FindPlaylistQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const afterQuery = (data) => {
  console.log(data.extensions)
  return data
}

export const QUERY = gql`
  query FindPlaylistQuery($id: Int!) {
    playlist: playlist(id: $id) {
      id
      name
      tracks {
        id
        name
        milliseconds
        unitPrice
        genre {
          id
          name
        }
        mediaType {
          id
          name
        }
        album {
          id
          title
          artist {
            id
            name
          }
        }
      }
    }
    metrics {
      init
      parse
      validate
      contextFactory
      execute
      hit
      ttl
      didCache
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  playlist,
}: // metrics,
CellSuccessProps<FindPlaylistQuery>) => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {playlist.tracks.map((track) => (
            <li key={track.id}>
              <a href="/" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {track.name}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {track.genre?.name}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500 truncate">
                        <UsersIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {track.album.artist.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <MusicNoteIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {track.album?.title}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <SaveIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {track.mediaType.name}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <ClockIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>{track.milliseconds}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
