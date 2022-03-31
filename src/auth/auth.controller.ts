import { Controller, Post, Body, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';


@ApiTags('auth')
@Controller({ path: 'auth', scope: Scope.REQUEST})
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    const auth = {
      name: 'joao',
      password: '123',
    };
    if (auth.name === loginDto.name && auth.password === loginDto.password) {
      const payload = {
        name: auth.name,
        sub: auth.name
      };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }
    return null;
  }
}

