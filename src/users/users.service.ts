import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginDto } from 'src/auth/dto/login.dto';
  
@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(User)
  private readonly userRepository: Repository<User>,
  ){}
  async createUser(usersInfo: User): Promise<User> {
    const user = this.userRepository.create(usersInfo);
    return this.userRepository.save(user)
  }
 
  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, userInfo: User): Promise<User> {
    const user = await this.getUserById(id);
    this.userRepository.merge(user, userInfo);
    return this.userRepository.save(user);
  }

 
    async delete(id: number): Promise<void> {
    const existingUser = await this.userRepository.delete(id);
       if (!existingUser) {
      throw new Error(`User with id ${id} not found`);  
      }
      await this.userRepository.delete(id);
}
}
