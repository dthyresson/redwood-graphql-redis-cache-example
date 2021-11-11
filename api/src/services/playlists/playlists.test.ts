import {
  playlists,
  playlist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} from './playlists'
import type { StandardScenario } from './playlists.scenarios'

describe('playlists', () => {
  scenario('returns all playlists', async (scenario: StandardScenario) => {
    const result = await playlists()

    expect(result.length).toEqual(Object.keys(scenario.playlist).length)
  })

  scenario('returns a single playlist', async (scenario: StandardScenario) => {
    const result = await playlist({ id: scenario.playlist.one.id })

    expect(result).toEqual(scenario.playlist.one)
  })

  scenario('deletes a playlist', async (scenario: StandardScenario) => {
    const original = await deletePlaylist({ id: scenario.playlist.one.id })
    const result = await playlist({ id: original.id })

    expect(result).toEqual(null)
  })
})
