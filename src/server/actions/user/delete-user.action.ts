'use server';

import { performDatabaseOperation } from '@/server/lib/database.lib';

export async function deleteUser(id: string) {
  return performDatabaseOperation(async (prisma) => {
    return prisma.login.delete({
      where: {
        userid: id,
      },
    });
  });
}
