set -ex

echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Album.csv Album" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Artist.csv Artist" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Customer.csv Customer" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Employee.csv Employee" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Genre.csv Genre" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Invoice.csv Invoice" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/InvoiceLine.csv InvoiceLine" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/MediaType.csv MediaType" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Playlist.csv Playlist" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/PlaylistTrack.csv _PlaylistToTrack" | sqlite3 ./api/db/dev.db
echo ".separator ","\n.import ./data/Chinook_Sqlite.csv/Track.csv Track" | sqlite3 ./api/db/dev.db


