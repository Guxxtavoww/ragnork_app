import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.character_class.createMany({
    data: [
      { class_description: 'Novice' },
      { class_description: 'Swordsman' },
      { class_description: 'Mage' },
      { class_description: 'Archer' },
      { class_description: 'Acolyte' },
      { class_description: 'Merchant' },
      { class_description: 'Thief' },
      { class_description: 'Knight' },
      { class_description: 'Priest' },
      { class_description: 'Wizard' },
      { class_description: 'Blacksmith' },
      { class_description: 'Hunter' },
      { class_description: 'Assassin' },
      { class_description: 'Crusader' },
      { class_description: 'Monk' },
      { class_description: 'Sage' },
      { class_description: 'Rogue' },
      { class_description: 'Alchemist' },
      { class_description: 'Bard' },
      { class_description: 'Dancer' },
      { class_description: 'Wedding' },
      { class_description: 'Super Novice' },
      { class_description: 'Gunslinger' },
      { class_description: 'Ninja' },
      { class_description: 'Xmas' },
      { class_description: 'Summer' },
      { class_description: 'Hanbok' },
      { class_description: 'Oktoberfest' },
      { class_description: 'High Novice' },
      { class_description: 'High Swordsman' },
      { class_description: 'High Mage' },
      { class_description: 'High Archer' },
      { class_description: 'High Acolyte' },
      { class_description: 'High Merchant' },
      { class_description: 'High Thief' },
      { class_description: 'Lord Knight' },
      { class_description: 'High Priest' },
      { class_description: 'High Wizard' },
      { class_description: 'Whitesmith' },
      { class_description: 'Sniper' },
      { class_description: 'Assassin Cross' },
    ],
  });
}

// execute the main function
main()
  .then(() => console.log('Banco populado com sucesso!'))
  .catch((err) => console.error(err))
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
