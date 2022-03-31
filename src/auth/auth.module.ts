import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './entities/auth.entity';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }], 'auth'),
    JwtModule.register({
      secret: 'humanotechtrilhanodejs',
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AuthController],
  exports: [MongooseModule, JwtStrategy],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
