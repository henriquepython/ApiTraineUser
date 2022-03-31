import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { Auth, AuthDocument } from './entities/auth.entity';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {}
