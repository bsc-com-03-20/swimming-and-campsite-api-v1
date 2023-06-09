import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
 
@Injectable()
export class AuthService {
    constructor (@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

   async signIn(username:string , password:string){
        const foundUser = await this.userRepository.findOne({where:{username}})

       if (foundUser) return foundUser

        throw new UnauthorizedException('Username does not exist')

      }

      async signin(username:string , password:string){
        const foundUser = await this.userRepository.findOne({where:{username}})
     
          if(foundUser) {
          const isAMatch = bcrypt.compare(password, foundUser.password);
            
          if(isAMatch) return {message: "Signin successfully"}

          return {errorMsg: "Username or password incorrect"}
          }
          else throw new UnauthorizedException('Incorrect username or password')
        }

        async signup(username:string , password:string, firstname: string){
          const foundUser = await this.userRepository.findOne({where:{username}})
             const salt = bcrypt.genSaltSync(10);
          
            
          
            if(foundUser) {
          const isAMatch = bcrypt.compare(password, foundUser.password);
              
            if(isAMatch) 
            return {message: "signup successfully"}
  
            }

          return{message: "Invalid credetials"}
            }
           }
        
      
      
      

         

         



         