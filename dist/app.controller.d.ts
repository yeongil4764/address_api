import { Prisma, User } from '.prisma/client';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    private appService;
    constructor(authService: AuthService, appService: AppService);
    register(userCreateInput: Prisma.UserCreateInput): Promise<User>;
    login(req: any): any;
}
