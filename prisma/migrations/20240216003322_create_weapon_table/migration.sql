-- CreateTable
CREATE TABLE "weapon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mana_usage" BOOLEAN NOT NULL,
    "type_of_damage" TEXT NOT NULL,
    "class" TEXT NOT NULL,

    CONSTRAINT "weapon_pkey" PRIMARY KEY ("id")
);
