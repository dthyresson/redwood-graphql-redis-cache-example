import { albums, album, createAlbum, updateAlbum, deleteAlbum } from './albums'
import type { StandardScenario } from './albums.scenarios'

describe('albums', () => {
  scenario('returns all albums', async (scenario: StandardScenario) => {
    const result = await albums()

    expect(result.length).toEqual(Object.keys(scenario.album).length)
  })

  scenario('returns a single album', async (scenario: StandardScenario) => {
    const result = await album({ id: scenario.album.one.id })

    expect(result).toEqual(scenario.album.one)
  })

  scenario('creates a album', async (scenario: StandardScenario) => {
    const result = await createAlbum({
      input: { title: 'String', artistId: scenario.album.two.artistId },
    })

    expect(result.title).toEqual('String')
    expect(result.artistId).toEqual(scenario.album.two.artistId)
  })

  scenario('updates a album', async (scenario: StandardScenario) => {
    const original = await album({ id: scenario.album.one.id })
    const result = await updateAlbum({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a album', async (scenario: StandardScenario) => {
    const original = await deleteAlbum({ id: scenario.album.one.id })
    const result = await album({ id: original.id })

    expect(result).toEqual(null)
  })
})
