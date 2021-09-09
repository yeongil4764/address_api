import { Prisma, User } from '.prisma/client';
import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    register(userCreateInput: Prisma.UserCreateInput): Promise<User>;
}
