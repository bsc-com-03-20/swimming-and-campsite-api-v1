import { Injectable } from '@nestjs/common';
 import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
// import { User } from 'src/user.entity';

@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(User)
  private readonly userRepository: Repository<User>,
  ){}

  async createUser(userInfo: User): Promise<User> {
    const user = this.userRepository.create(userInfo);
    return this.userRepository.save(user);
   }


  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
