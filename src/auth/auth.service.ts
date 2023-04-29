import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor (@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }
    
   async signIn(username:string , password:string){
        const foundUser = await this.userRepository.findOne({where:{username}})

        // if there is a found user -> verify his password in a hash form 
        // if the password matches with the hash return the info  of the user
        if (foundUser) return foundUser

        throw new UnauthorizedException('Username doesnot exist')

      }
}
