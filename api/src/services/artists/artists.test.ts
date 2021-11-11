import {
  artists,
  artist,
  createArtist,
  updateArtist,
  deleteArtist,
} from './artists'
import type { StandardScenario } from './artists.scenarios'

describe('artists', () => {
  scenario('returns all artists', async (scenario: StandardScenario) => {
    const result = await artists()

    expect(result.length).toEqual(Object.keys(scenario.artist).length)
  })

  scenario('returns a single artist', async (scenario: StandardScenario) => {
    const result = await artist({ id: scenario.artist.one.id })

    expect(result).toEqual(scenario.artist.one)
  })

  scenario('deletes a artist', async (scenario: StandardScenario) => {
    const original = await deleteArtist({ id: scenario.artist.one.id })
    const result = await artist({ id: original.id })

    expect(result).toEqual(null)
  })
})
