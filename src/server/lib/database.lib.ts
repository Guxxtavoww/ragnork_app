import { PrismaClient } from '@prisma/client';

class PrimsaInstance {
  private prismaInstance: Maybe<PrismaClient> = null;

  constructor() {
    this.prismaInstance = new PrismaClient();
  }

  getPrismaInstance() {
    if (this.prismaInstance) {
      this.prismaInstance.$connect();

      return this.prismaInstance;
    }

    throw new Error('Prisma instance not initialized.');
  }

  async disconnect() {
    if (this.prismaInstance) {
      await this.prismaInstance.$disconnect();
    }
  }
}

const prismaInstance = new PrimsaInstance();

export async function performDatabaseOperation<T>(
  callback: (prisma: PrismaClient) => Promise<T>
): Promise<T> {
  try {
    const prisma = prismaInstance.getPrismaInstance();

    const result = await callback(prisma);

    return Promise.resolve(result);
  } catch (error) {
    prismaInstance.disconnect();

    console.error(error);

    throw error;
  }
}
