-- CreateEnum
CREATE TYPE "EmailType" AS ENUM ('Personal', 'Work', 'Custom');

-- CreateEnum
CREATE TYPE "NumberType" AS ENUM ('Mobile', 'Home', 'Secondary', 'Work', 'Custom');

-- CreateTable
CREATE TABLE "aliases" (
    "id" TEXT NOT NULL,
    "alias" VARCHAR(40) NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "aliases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "lastname" VARCHAR(40),
    "photo" VARCHAR(60),
    "birthday" DATE,
    "address" VARCHAR(40),
    "notes" TEXT,
    "year_met" SMALLINT,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "type" "EmailType" NOT NULL DEFAULT 'Personal',
    "label" VARCHAR(40),
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "numbers" (
    "id" TEXT NOT NULL,
    "number" VARCHAR(20) NOT NULL,
    "type" "NumberType" NOT NULL DEFAULT 'Mobile',
    "label" VARCHAR(40),
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "numbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socials" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(80) NOT NULL,
    "label" VARCHAR(40),
    "platform_id" TEXT NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "url" VARCHAR(40),
    "prefix" VARCHAR(10),

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aliases" ADD CONSTRAINT "aliases_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "numbers" ADD CONSTRAINT "numbers_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
