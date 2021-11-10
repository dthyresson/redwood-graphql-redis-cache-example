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
        artistFamiliarity: 1488206.9274610577,
        artistHotttnesss: 9295804.55596281,
        artistId: 'String',
        artistLatitude: 2693615.1854654276,
        artistLocation: 1440918,
        artistLongitude: 3455547.8839314003,
        artistName: 'String',
        artistSimilar: 1293506.135409852,
        artistTerms: 'String',
        artistTermsFreq: 5778971.190783888,
        releaseId: 5126146,
        releaseName: 4924078,
        songArtistMbtags: 9188893.922819145,
        songArtistMbtagsCount: 5096991.015478365,
        songBarsConfidence: 2349155.2960335384,
        songBarsStart: 410383.0613587145,
        songBeatsConfidence: 8249866.619377668,
        songBeatsStart: 8398263.424391218,
        songDuration: 9705209.312544202,
        songEndOfFadeIn: 5333599.72796839,
        songHotttnesss: 7559948.224680974,
        songId: 'String',
        songKey: 3188716.3295461284,
        songKeyConfidence: 3927928.0761429104,
        songLoudness: 7813773.702143539,
        songMode: 4702368,
        songModeConfidence: 3098163.861863066,
        songStartOfFadeOut: 1645656.0321078317,
        songTatumsConfidence: 6324909.62331495,
        songTatumsStart: 9959399.638911095,
        songTempo: 5186582.285132495,
        songTimeSignature: 7120778.04864085,
        songTimeSignatureConfidence: 8597633.936320057,
        songTitle: 7372320,
        songYear: 6008022,
      },
    })

    expect(result.artistFamiliarity).toEqual(1488206.9274610577)
    expect(result.artistHotttnesss).toEqual(9295804.55596281)
    expect(result.artistId).toEqual('String')
    expect(result.artistLatitude).toEqual(2693615.1854654276)
    expect(result.artistLocation).toEqual(1440918)
    expect(result.artistLongitude).toEqual(3455547.8839314003)
    expect(result.artistName).toEqual('String')
    expect(result.artistSimilar).toEqual(1293506.135409852)
    expect(result.artistTerms).toEqual('String')
    expect(result.artistTermsFreq).toEqual(5778971.190783888)
    expect(result.releaseId).toEqual(5126146)
    expect(result.releaseName).toEqual(4924078)
    expect(result.songArtistMbtags).toEqual(9188893.922819145)
    expect(result.songArtistMbtagsCount).toEqual(5096991.015478365)
    expect(result.songBarsConfidence).toEqual(2349155.2960335384)
    expect(result.songBarsStart).toEqual(410383.0613587145)
    expect(result.songBeatsConfidence).toEqual(8249866.619377668)
    expect(result.songBeatsStart).toEqual(8398263.424391218)
    expect(result.songDuration).toEqual(9705209.312544202)
    expect(result.songEndOfFadeIn).toEqual(5333599.72796839)
    expect(result.songHotttnesss).toEqual(7559948.224680974)
    expect(result.songId).toEqual('String')
    expect(result.songKey).toEqual(3188716.3295461284)
    expect(result.songKeyConfidence).toEqual(3927928.0761429104)
    expect(result.songLoudness).toEqual(7813773.702143539)
    expect(result.songMode).toEqual(4702368)
    expect(result.songModeConfidence).toEqual(3098163.861863066)
    expect(result.songStartOfFadeOut).toEqual(1645656.0321078317)
    expect(result.songTatumsConfidence).toEqual(6324909.62331495)
    expect(result.songTatumsStart).toEqual(9959399.638911095)
    expect(result.songTempo).toEqual(5186582.285132495)
    expect(result.songTimeSignature).toEqual(7120778.04864085)
    expect(result.songTimeSignatureConfidence).toEqual(8597633.936320057)
    expect(result.songTitle).toEqual(7372320)
    expect(result.songYear).toEqual(6008022)
  })

  scenario('updates a music', async (scenario: StandardScenario) => {
    const original = await music({ id: scenario.music.one.id })
    const result = await updateMusic({
      id: original.id,
      input: { artistFamiliarity: 8027791.883707264 },
    })

    expect(result.artistFamiliarity).toEqual(8027791.883707264)
  })

  scenario('deletes a music', async (scenario: StandardScenario) => {
    const original = await deleteMusic({ id: scenario.music.one.id })
    const result = await music({ id: original.id })

    expect(result).toEqual(null)
  })
})
