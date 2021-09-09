import { Prisma, User } from ".prisma/client";
import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/guard/local-auth.guard";

@Controller()
export class AppController {
    constructor(private authService: AuthService, private appService: AppService) {}

    @Post('register')
    async register(@Body() userCreateInput: Prisma.UserCreateInput): Promise<User> {
        return await this.appService.register(userCreateInput);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
        return this.authService.login(req.user);
    }
}