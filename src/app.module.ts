import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ContactsModule, AuthModule, UserModule],
  providers: [AuthService, UserService, PrismaService],
  controllers: [AppController],
})
export class AppModule {}
