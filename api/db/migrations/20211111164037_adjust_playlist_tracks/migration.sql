/*
  Warnings:

  - You are about to drop the `PlaylistTrack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlaylistTrack";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PlaylistTracks" (
    "playlistId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    PRIMARY KEY ("playlistId", "trackId"),
    CONSTRAINT "PlaylistTracks_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "PlaylistTracks_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE INDEX "IFK_PlaylistTrackTrackId" ON "PlaylistTracks"("trackId");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_PlaylistTrack" ON "PlaylistTracks"("playlistId", "trackId");
