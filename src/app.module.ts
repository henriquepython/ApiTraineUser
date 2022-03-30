import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(
    'mongodb://balta:e296cd9f@localhost:27017/admin')],
  controllers: [],
  providers: [],
})
export class AppModule {}
