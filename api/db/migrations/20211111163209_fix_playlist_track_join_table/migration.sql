/*
  Warnings:

  - You are about to drop the column `id` on the `PlaylistTrack` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlaylistTrack" (
    "playlistId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    PRIMARY KEY ("playlistId", "trackId"),
    CONSTRAINT "PlaylistTrack_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "PlaylistTrack_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_PlaylistTrack" ("playlistId", "trackId") SELECT "playlistId", "trackId" FROM "PlaylistTrack";
DROP TABLE "PlaylistTrack";
ALTER TABLE "new_PlaylistTrack" RENAME TO "PlaylistTrack";
CREATE INDEX "IFK_PlaylistTrackTrackId" ON "PlaylistTrack"("trackId");
CREATE UNIQUE INDEX "IPK_PlaylistTrack" ON "PlaylistTrack"("playlistId", "trackId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
