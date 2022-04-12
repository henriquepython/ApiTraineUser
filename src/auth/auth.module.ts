import { Module, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    MongooseModule,
    JwtModule.register({
      secret: 'humanotechtrilhanodejs',
      signOptions: { expiresIn: '90s' },
    }),
  ],
  controllers: [AuthController],
  exports: [MongooseModule, JwtStrategy, Logger],
  providers: [AuthService, JwtStrategy, Logger],
})
export class AuthModule {}
