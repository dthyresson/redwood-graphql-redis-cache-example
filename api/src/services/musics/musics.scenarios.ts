import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MusicCreateArgs>({
  music: {
    one: {
      data: {
        artistFamiliarity: 7295700.24691939,
        artistHotttnesss: 9769918.376317399,
        artistId: 'String',
        artistLatitude: 794106.1902601998,
        artistLocation: 4368785,
        artistLongitude: 9862225.221220186,
        artistName: 'String',
        artistSimilar: 8881607.004079267,
        artistTerms: 'String',
        artistTermsFreq: 4223261.0930869365,
        releaseId: 1323221,
        releaseName: 3165374,
        songArtistMbtags: 2864419.004140879,
        songArtistMbtagsCount: 8601575.025543952,
        songBarsConfidence: 7505569.804883945,
        songBarsStart: 9530017.197654583,
        songBeatsConfidence: 6191910.652068185,
        songBeatsStart: 2041559.7738323153,
        songDuration: 1279294.5777519615,
        songEndOfFadeIn: 874031.2106202253,
        songHotttnesss: 2631924.4316106504,
        songId: 'String',
        songKey: 3447448.5647341013,
        songKeyConfidence: 1970946.9902311526,
        songLoudness: 6649301.838876546,
        songMode: 4532533,
        songModeConfidence: 1784349.5663440078,
        songStartOfFadeOut: 3976587.014607864,
        songTatumsConfidence: 7696948.180774847,
        songTatumsStart: 2918374.9009622997,
        songTempo: 1015601.8467718342,
        songTimeSignature: 372625.81584458274,
        songTimeSignatureConfidence: 4636862.121356172,
        songTitle: 7855891,
        songYear: 8908097,
      },
    },
    two: {
      data: {
        artistFamiliarity: 9728986.389118645,
        artistHotttnesss: 2040794.954875329,
        artistId: 'String',
        artistLatitude: 4456653.322913666,
        artistLocation: 1699817,
        artistLongitude: 2728869.6935137403,
        artistName: 'String',
        artistSimilar: 9940120.571987694,
        artistTerms: 'String',
        artistTermsFreq: 6867982.733194558,
        releaseId: 3219469,
        releaseName: 8298394,
        songArtistMbtags: 6024506.5912258485,
        songArtistMbtagsCount: 1084328.693565504,
        songBarsConfidence: 9762985.672452683,
        songBarsStart: 6324297.943115245,
        songBeatsConfidence: 9790951.78832005,
        songBeatsStart: 526857.8187906092,
        songDuration: 2748549.90123913,
        songEndOfFadeIn: 1211953.630333158,
        songHotttnesss: 5776706.905910523,
        songId: 'String',
        songKey: 9300432.187106062,
        songKeyConfidence: 7223551.72056045,
        songLoudness: 5645338.984291482,
        songMode: 3377760,
        songModeConfidence: 431582.82678439794,
        songStartOfFadeOut: 7879974.759181972,
        songTatumsConfidence: 9427815.846979303,
        songTatumsStart: 2002008.9115354067,
        songTempo: 8201096.2481856,
        songTimeSignature: 5777287.896063488,
        songTimeSignatureConfidence: 3420431.633921477,
        songTitle: 1680511,
        songYear: 8639151,
      },
    },
  },
})

export type StandardScenario = typeof standard