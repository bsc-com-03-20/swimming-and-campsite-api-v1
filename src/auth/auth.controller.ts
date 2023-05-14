import { Controller, Post, Get,Body, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
//import { encodePassword } from 'src/users/bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
// import { get } from 'http';
// import{ Controller,Post,Body }


@Controller('auth')
//export class AuthController {}
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signIn(@Body() userData: LoginDto) {
      return this.authService.signin(userData.username, userData.password)
    }
    @Post('signup')
    signUp(@Body() userData: LoginDto) {
      return this.authService.signup(userData.username, userData.password, userData.firstname)

    }

}


    
    
    

