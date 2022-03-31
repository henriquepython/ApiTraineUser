import { Controller, Post, Body, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { Console } from 'console';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';


@ApiTags('auth')
@Controller({ path: 'auth', scope: Scope.REQUEST})
export class AuthController {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findByUsername(loginDto.name);
    if (user && user.password === loginDto.password) {
      const payload = {
        name: user.name,
        sub: user.name
      };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }
    return null;
  }
}
