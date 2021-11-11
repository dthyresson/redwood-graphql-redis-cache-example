import { genres, genre, createGenre, updateGenre, deleteGenre } from './genres'
import type { StandardScenario } from './genres.scenarios'

describe('genres', () => {
  scenario('returns all genres', async (scenario: StandardScenario) => {
    const result = await genres()

    expect(result.length).toEqual(Object.keys(scenario.genre).length)
  })

  scenario('returns a single genre', async (scenario: StandardScenario) => {
    const result = await genre({ id: scenario.genre.one.id })

    expect(result).toEqual(scenario.genre.one)
  })

  scenario('deletes a genre', async (scenario: StandardScenario) => {
    const original = await deleteGenre({ id: scenario.genre.one.id })
    const result = await genre({ id: original.id })

    expect(result).toEqual(null)
  })
})
