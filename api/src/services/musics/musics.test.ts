import { musics, music, createMusic, updateMusic, deleteMusic } from './musics'
import type { StandardScenario } from './musics.scenarios'

describe('musics', () => {
  scenario('returns all musics', async (scenario: StandardScenario) => {
    const result = await musics()

    expect(result.length).toEqual(Object.keys(scenario.music).length)
  })

  scenario('returns a single music', async (scenario: StandardScenario) => {
    const result = await music({ id: scenario.music.one.id })

    expect(result).toEqual(scenario.music.one)
  })

  scenario('creates a music', async () => {
    const result = await createMusic({
      input: {
        artistFamiliarity: 2365947.2608423824,
        artistHotttnesss: 1539310.0759913581,
        artistId: 'String',
        artistLatitude: 210334.3176676109,
        artistLocation: 4573050,
        artistLongitude: 3864275.0668942803,
        artistName: 'String',
        artistSimilar: 8349250.758558189,
        artistTerms: 'String',
        artistTermsFreq: 94069.55914523563,
        releaseId: 4733575,
        releaseName: 1829226,
        songArtistMbtags: 4252739.579968212,
        songArtistMbtagsCount: 3777998.9406903237,
        songBarsConfidence: 7583779.921419882,
        songBarsStart: 2657599.3430686593,
        songBeatsConfidence: 8090858.724638346,
        songBeatsStart: 6800943.396974448,
        songDuration: 1744366.514456781,
        songEndOfFadeIn: 933579.7658139277,
        songHotttnesss: 8887142.047245324,
        songId: 'String',
        songKey: 4695649.117101555,
        songKeyConfidence: 2001289.1790117493,
        songLoudness: 8198284.972274637,
        songMode: 754285,
        songModeConfidence: 3007447.5799107756,
        songStartOfFadeOut: 1464278.2516141883,
        songTatumsConfidence: 7288360.582359301,
        songTatumsStart: 7618750.834777965,
        songTempo: 7340848.729733132,
        songTimeSignature: 8833875.670707244,
        songTimeSignatureConfidence: 4245315.503425438,
        songTitle: 9325639,
        songYear: 4583358,
      },
    })

    expect(result.artistFamiliarity).toEqual(2365947.2608423824)
    expect(result.artistHotttnesss).toEqual(1539310.0759913581)
    expect(result.artistId).toEqual('String')
    expect(result.artistLatitude).toEqual(210334.3176676109)
    expect(result.artistLocation).toEqual(4573050)
    expect(result.artistLongitude).toEqual(3864275.0668942803)
    expect(result.artistName).toEqual('String')
    expect(result.artistSimilar).toEqual(8349250.758558189)
    expect(result.artistTerms).toEqual('String')
    expect(result.artistTermsFreq).toEqual(94069.55914523563)
    expect(result.releaseId).toEqual(4733575)
    expect(result.releaseName).toEqual(1829226)
    expect(result.songArtistMbtags).toEqual(4252739.579968212)
    expect(result.songArtistMbtagsCount).toEqual(3777998.9406903237)
    expect(result.songBarsConfidence).toEqual(7583779.921419882)
    expect(result.songBarsStart).toEqual(2657599.3430686593)
    expect(result.songBeatsConfidence).toEqual(8090858.724638346)
    expect(result.songBeatsStart).toEqual(6800943.396974448)
    expect(result.songDuration).toEqual(1744366.514456781)
    expect(result.songEndOfFadeIn).toEqual(933579.7658139277)
    expect(result.songHotttnesss).toEqual(8887142.047245324)
    expect(result.songId).toEqual('String')
    expect(result.songKey).toEqual(4695649.117101555)
    expect(result.songKeyConfidence).toEqual(2001289.1790117493)
    expect(result.songLoudness).toEqual(8198284.972274637)
    expect(result.songMode).toEqual(754285)
    expect(result.songModeConfidence).toEqual(3007447.5799107756)
    expect(result.songStartOfFadeOut).toEqual(1464278.2516141883)
    expect(result.songTatumsConfidence).toEqual(7288360.582359301)
    expect(result.songTatumsStart).toEqual(7618750.834777965)
    expect(result.songTempo).toEqual(7340848.729733132)
    expect(result.songTimeSignature).toEqual(8833875.670707244)
    expect(result.songTimeSignatureConfidence).toEqual(4245315.503425438)
    expect(result.songTitle).toEqual(9325639)
    expect(result.songYear).toEqual(4583358)
  })

  scenario('updates a music', async (scenario: StandardScenario) => {
    const original = await music({ id: scenario.music.one.id })
    const result = await updateMusic({
      id: original.id,
      input: { artistFamiliarity: 3534683.8453322737 },
    })

    expect(result.artistFamiliarity).toEqual(3534683.8453322737)
  })

  scenario('deletes a music', async (scenario: StandardScenario) => {
    const original = await deleteMusic({ id: scenario.music.one.id })
    const result = await music({ id: original.id })

    expect(result).toEqual(null)
  })
})
