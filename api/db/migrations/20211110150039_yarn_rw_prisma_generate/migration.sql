-- CreateTable
CREATE TABLE "Music" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artistFamiliarity" REAL NOT NULL,
    "artistHotttnesss" REAL NOT NULL,
    "artistId" TEXT NOT NULL,
    "artistLatitude" REAL NOT NULL,
    "artistLocation" INTEGER NOT NULL,
    "artistLongitude" REAL NOT NULL,
    "artistName" TEXT NOT NULL,
    "artistSimilar" REAL NOT NULL,
    "artistTerms" TEXT NOT NULL,
    "artistTermsFreq" REAL NOT NULL,
    "releaseId" INTEGER NOT NULL,
    "releaseName" INTEGER NOT NULL,
    "songArtistMbtags" REAL NOT NULL,
    "songArtistMbtagsCount" REAL NOT NULL,
    "songBarsConfidence" REAL NOT NULL,
    "songBarsStart" REAL NOT NULL,
    "songBeatsConfidence" REAL NOT NULL,
    "songBeatsStart" REAL NOT NULL,
    "songDuration" REAL NOT NULL,
    "songEndOfFadeIn" REAL NOT NULL,
    "songHotttnesss" REAL NOT NULL,
    "songId" TEXT NOT NULL,
    "songKey" REAL NOT NULL,
    "songKeyConfidence" REAL NOT NULL,
    "songLoudness" REAL NOT NULL,
    "songMode" INTEGER NOT NULL,
    "songModeConfidence" REAL NOT NULL,
    "songStartOfFadeOut" REAL NOT NULL,
    "songTatumsConfidence" REAL NOT NULL,
    "songTatumsStart" REAL NOT NULL,
    "songTempo" REAL NOT NULL,
    "songTimeSignature" REAL NOT NULL,
    "songTimeSignatureConfidence" REAL NOT NULL,
    "songTitle" INTEGER NOT NULL,
    "songYear" INTEGER NOT NULL
);
