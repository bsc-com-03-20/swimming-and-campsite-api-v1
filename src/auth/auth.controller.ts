import { Controller, Post, Get,Body, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
  

@Controller('auth')
 export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(@Body() userData: LoginDto) {
      return this.authService.signup(userData.username, userData.password, userData.firstname)

    }
    @Post('signin')
    signIn(@Body() userData: LoginDto) {
      return this.authService.signin(userData.username, userData.password)
    }
}


    
    
    

