import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userSerivce: UserService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userSerivce.findOne(username);

    if (user && user.password === password) {
      const { password, ...rest } = user;

      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = { id: user.id, name: user.name, role: user.role };

    return {
      aceess_token: this.jwtService.sign(payload),
    };
  }
}
