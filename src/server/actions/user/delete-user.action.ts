'use server';

import { performDatabaseOperation } from '@/server/lib/database.lib';

export async function deleteUser(id: string) {
  return performDatabaseOperation(async (prisma) => {
    return Promise.all([
      prisma.login.delete({
        where: {
          userid: id,
        },
      }),
      prisma.game_account.deleteMany({
        where: {
          game_account_owner_id: id,
        },
      }),
    ]);
  });
}
