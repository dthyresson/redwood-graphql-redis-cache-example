import type { PlayListWithTracksQuery } from 'types/graphql'
import { ClockIcon, MusicNoteIcon, UsersIcon } from '@heroicons/react/solid'
import { SaveIcon } from '@heroicons/react/outline'

import { Link, routes, useParams } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

const DEFAULT_SHOW = 10
export const beforeQuery = (props) => {
  const { first, before } = props
  return {
    variables: {
      ...props,
      first: first || DEFAULT_SHOW,
      before,
    },
  }
}

export const QUERY = gql`
  query PlaylistWithTracks(
    $id: Int!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    playlist(id: $id) {
      id
      name
    }
    tracks: tracksForPlaylist(
      id: $id
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      edges {
        node {
          id
          name
          milliseconds
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
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
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
  tracks,
}: CellSuccessProps<PlayListWithTracksQuery>) => {
  const { first, last } = useParams()

  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {playlist.name}
          </h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {tracks.edges.map(({ node: track }) => (
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
      <nav
        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">{tracks.totalCount}</span> results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <Link
            to={routes.home({
              id: playlist.id,
              before: tracks.pageInfo.startCursor,
              last: last || DEFAULT_SHOW,
            })}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </Link>
          <Link
            to={routes.home({
              id: playlist.id,
              after: tracks.pageInfo.endCursor,
              first: first || DEFAULT_SHOW,
            })}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </Link>
        </div>
      </nav>
    </div>
  )
}
