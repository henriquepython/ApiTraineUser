import { Logger } from '@nestjs/common';
import { Controller, Post, Body, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller({ path: 'auth', scope: Scope.REQUEST })
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(AuthController.name);
  }

  @Post()
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Buscando usuario por username: ${loginDto?.name}`);
    const auth = {
      name: 'joao',
      password: '123',
    };
    if (auth.name === loginDto.name && auth.password === loginDto.password) {
      this.logger.log('Login realizado com sucesso');
      const payload = {
        name: auth.name,
        sub: auth.name,
      };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }

    this.logger.log('username ou password invalido');
    return null;
  }
}
