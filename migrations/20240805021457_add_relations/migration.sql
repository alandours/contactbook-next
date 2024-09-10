-- CreateTable
CREATE TABLE "ContactToContact" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(40),
    "fromContactId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "ContactToContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactToContact_fromContactId_contactId_key" ON "ContactToContact"("fromContactId", "contactId");

-- AddForeignKey
ALTER TABLE "ContactToContact" ADD CONSTRAINT "ContactToContact_fromContactId_fkey" FOREIGN KEY ("fromContactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactToContact" ADD CONSTRAINT "ContactToContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
