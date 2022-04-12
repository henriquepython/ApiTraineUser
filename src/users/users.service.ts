import { Logger } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(UsersService.name);
  }

  async create(createUserDto: CreateUserDto) {
    this.logger.log('usuario criado com sucesso!');
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async findAll() {
    this.logger.log('todos usuarios listados com sucesso!');
    return await this.userModel.find();
  }

  async findOne(id: string) {
    this.logger.log('Buscando usuario');
    const user = await this.userModel.findById(id);

    if (!user) {
      this.logger.error(`usuario de id: ${id} não foi encontrado`);
      throw new BadRequestException('usuario não encontrado');
    }

    this.logger.log('Usuario encontrado');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.log('Buscando usuario');
    const user = await this.userModel.findById(id);

    if (!user) {
      this.logger.error(`usuario de id: ${id} não foi encontrado`);
      throw new BadRequestException('usuario não encontrado');
    }

    this.logger.log('usuario atualizado com sucesso');
    return await this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  async remove(id: string) {
    this.logger.log('Buscando usuario');
    const user = await this.userModel.findById(id);

    if (!user) {
      this.logger.error(`usuario de id: ${id} não foi encontrado`);
      throw new BadRequestException('usuario não encontrado');
    }

    this.logger.log('usuario removido com sucesso');
    return await this.userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
