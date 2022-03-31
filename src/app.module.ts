import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
    'mongodb://balta:e296cd9f@localhost:27017/admin', {
      connectionName: 'user',
    }),

    MongooseModule.forRoot(
      'mongodb://balta:e296cd9f@localhost:27017/admin', {
        connectionName: 'auth',
      }),
      ],
  controllers: [],
  providers: [],
})
export class AppModule {}
