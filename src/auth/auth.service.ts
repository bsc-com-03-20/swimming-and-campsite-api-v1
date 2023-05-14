import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Any, Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { isEmail } from 'class-validator';
import { BcryptService } from 'src/utils/bcrypt';

      Injectable()
export class AuthService {
    constructor (@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

   async signIn(username:string , password:string){
        const foundUser = await this.userRepository.findOne({where:{username}})

        // if there is a found user -> verify his password in a hash form 
        // if the password matches with the hash return the info  of the user
        if (foundUser) return foundUser

        throw new UnauthorizedException('Username does not exist')

      }

      async signin(username:string , password:string){
        const foundUser = await this.userRepository.findOne({where:{username}})
          //const salt = bcrypt.genSaltSync(10);
         //const hashedPassword = bcrypt.hashSync(password, salt);
         //void hashedPassword;
          
          if(foundUser) {
          const isAMatch = bcrypt.compare(password, foundUser.password);
            
          if(isAMatch) return {message: "Logged in successfully"}

          return {errorMsg: "Username or password incorrect"}
          }
          else throw new UnauthorizedException('Incorrect username or password')
        }

        async signup(username:string , password:string, firstname: string){
          const foundUser = await this.userRepository.findOne({where:{username}})
             const salt = bcrypt.genSaltSync(10);
             //const hashedPassword = BcryptService.hashSync(password, salt);
             //return bcrypt.hash(password,salt);

            
          
            if(foundUser) {
          const isAMatch = bcrypt.compare(password, foundUser.password);
              
            if(isAMatch) return {message: "Logged out successfully"}
  
            }

          return{message: "Logged out successfully"}
            }
           //else throw new UnauthorizedException('invalid credentials')
          }
        
      
      
      

         

         



         //if there is a found user -> verify his password in a hash form 
         //if the password matches with the haXsh return the info  of the user
         //if (foundUser) return foundUser

         //throw new UnauthorizedException('password doesnot exist')

//function checkPassword(password: string, string: any) {
  //throw new Error('Function not implemented.');
//}
// @Injectable()
// export class AuthService {
  //jwtService: LoginDto;
  //constructor(private readonly usersService: UsersService) {}
  //async signIn(loginDto:LoginDto) {
    //const {email,password} = loginDto;

     //const user = await this.usersService.findByEmail(email);

    //if (!User) {
      //throw new UnauthorizedException('Invalid credentials');

    //}
     //const isValidPassword =   bcrypt.compare(password,user.password);

    //if (!password) {
     // throw new UnauthorizedException("Invalid credentials");
    //}
    //const payload = {userId: User.id};
    //const accessToken = this.jwtService.signIn(payload);
    //return { accessToken };


  //} catch (error) {
   // throw new InternalServerErrorException(error.message);
  //}
//}
//@Injectable()
 //export class AuthService {
   //password: string;
     //sign(LoginDto: LoginDto) {
        // throw new Error('Method not implemented.');
     //}
     //constructor (@InjectRepository(User)
    //private readonly userRepository: Repository<User>) { }
    
  //async signIn(username:string , password:string){
        //const foundUser = await this.userRepository.findOne({where:{username}})
          //const salt = bcrypt.genSaltSync(10);
          //const hashedPassword = bcrypt.hashSync(password, salt);
          //this.password = hashedPassword;
        //}
      
        //checkPassword(password: string): boolean {
          //return bcrypt.compareSync(password, this.password);
       // }
      //