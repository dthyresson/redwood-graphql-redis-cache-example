import {
  mediaTypes,
  mediaType,
  createMediaType,
  updateMediaType,
  deleteMediaType,
} from './mediaTypes'
import type { StandardScenario } from './mediaTypes.scenarios'

describe('mediaTypes', () => {
  scenario('returns all mediaTypes', async (scenario: StandardScenario) => {
    const result = await mediaTypes()

    expect(result.length).toEqual(Object.keys(scenario.mediaType).length)
  })

  scenario('returns a single mediaType', async (scenario: StandardScenario) => {
    const result = await mediaType({ id: scenario.mediaType.one.id })

    expect(result).toEqual(scenario.mediaType.one)
  })

  scenario('deletes a mediaType', async (scenario: StandardScenario) => {
    const original = await deleteMediaType({ id: scenario.mediaType.one.id })
    const result = await mediaType({ id: original.id })

    expect(result).toEqual(null)
  })
})
