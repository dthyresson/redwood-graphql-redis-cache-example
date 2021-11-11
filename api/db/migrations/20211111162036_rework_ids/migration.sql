-- CreateTable
CREATE TABLE "Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artistId" INTEGER NOT NULL,
    CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "company" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postalCode" TEXT,
    "phone" TEXT,
    "fax" TEXT,
    "email" TEXT NOT NULL,
    "supportRepId" INTEGER,
    CONSTRAINT "Customer_supportRepId_fkey" FOREIGN KEY ("supportRepId") REFERENCES "Employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "title" TEXT,
    "reportsTo" INTEGER,
    "birthDate" DATETIME,
    "hireDate" DATETIME,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postalCode" TEXT,
    "phone" TEXT,
    "fax" TEXT,
    "email" TEXT,
    CONSTRAINT "Employee_reportsTo_fkey" FOREIGN KEY ("reportsTo") REFERENCES "Employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" INTEGER NOT NULL,
    "invoiceDate" DATETIME NOT NULL,
    "billingAddress" TEXT,
    "billingCity" TEXT,
    "billingState" TEXT,
    "billingCountry" TEXT,
    "billingPostalCode" TEXT,
    "total" DECIMAL NOT NULL,
    CONSTRAINT "Invoice_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "InvoiceLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,
    "unitPrice" DECIMAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "InvoiceLine_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "InvoiceLine_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "MediaType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "PlaylistTrack" (
    "id" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,
    "playlistId" INTEGER NOT NULL,

    PRIMARY KEY ("playlistId", "trackId"),
    CONSTRAINT "PlaylistTrack_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "PlaylistTrack_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "albumId" INTEGER,
    "mediaTypeId" INTEGER NOT NULL,
    "genreId" INTEGER,
    "composer" TEXT,
    "milliseconds" INTEGER NOT NULL,
    "bytes" INTEGER,
    "unitPrice" DECIMAL NOT NULL,
    CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Track_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Track_mediaTypeId_fkey" FOREIGN KEY ("mediaTypeId") REFERENCES "MediaType" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Album" ON "Album"("id");

-- CreateIndex
CREATE INDEX "IFK_AlbumArtistId" ON "Album"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Artist" ON "Artist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Customer" ON "Customer"("id");

-- CreateIndex
CREATE INDEX "IFK_CustomerSupportRepId" ON "Customer"("supportRepId");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Employee" ON "Employee"("id");

-- CreateIndex
CREATE INDEX "IFK_EmployeeReportsTo" ON "Employee"("reportsTo");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Genre" ON "Genre"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Invoice" ON "Invoice"("id");

-- CreateIndex
CREATE INDEX "IFK_InvoiceCustomerId" ON "Invoice"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_InvoiceLine" ON "InvoiceLine"("id");

-- CreateIndex
CREATE INDEX "IFK_InvoiceLineTrackId" ON "InvoiceLine"("trackId");

-- CreateIndex
CREATE INDEX "IFK_InvoiceLineInvoiceId" ON "InvoiceLine"("invoiceId");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_MediaType" ON "MediaType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Playlist" ON "Playlist"("id");

-- CreateIndex
CREATE INDEX "IFK_PlaylistTrackTrackId" ON "PlaylistTrack"("trackId");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_PlaylistTrack" ON "PlaylistTrack"("playlistId", "trackId");

-- CreateIndex
CREATE UNIQUE INDEX "IPK_Track" ON "Track"("id");

-- CreateIndex
CREATE INDEX "IFK_TrackMediaTypeId" ON "Track"("mediaTypeId");

-- CreateIndex
CREATE INDEX "IFK_TrackGenreId" ON "Track"("genreId");

-- CreateIndex
CREATE INDEX "IFK_TrackAlbumId" ON "Track"("albumId");
