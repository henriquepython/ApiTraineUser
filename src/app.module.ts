import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(
    'mongodb+srv://root:123456789@@cluster0.2mt7u.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
