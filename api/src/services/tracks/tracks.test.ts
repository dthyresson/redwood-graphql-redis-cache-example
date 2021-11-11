import { tracks, track, createTrack, updateTrack, deleteTrack } from './tracks'
import type { StandardScenario } from './tracks.scenarios'

describe('tracks', () => {
  scenario('returns all tracks', async (scenario: StandardScenario) => {
    const result = await tracks()

    expect(result.length).toEqual(Object.keys(scenario.track).length)
  })

  scenario('returns a single track', async (scenario: StandardScenario) => {
    const result = await track({ id: scenario.track.one.id })

    expect(result).toEqual(scenario.track.one)
  })

  scenario('creates a track', async (scenario: StandardScenario) => {
    const result = await createTrack({
      input: {
        name: 'String',
        mediaTypeId: scenario.track.two.mediaTypeId,
        milliseconds: 5275184,
        unitPrice: 3292276.2780523174,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.mediaTypeId).toEqual(scenario.track.two.mediaTypeId)
    expect(result.milliseconds).toEqual(5275184)
    expect(result.unitPrice).toEqual(3292276.2780523174)
  })

  scenario('updates a track', async (scenario: StandardScenario) => {
    const original = await track({ id: scenario.track.one.id })
    const result = await updateTrack({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a track', async (scenario: StandardScenario) => {
    const original = await deleteTrack({ id: scenario.track.one.id })
    const result = await track({ id: original.id })

    expect(result).toEqual(null)
  })
})
