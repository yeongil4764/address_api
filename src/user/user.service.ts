import { prisma, User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findOne(name: string): Promise<User | undefined> {
    console.log(this.prismaService.user.findUnique({ where: { name } }));
    return this.prismaService.user.findUnique({ where: { name } });
  }
}
