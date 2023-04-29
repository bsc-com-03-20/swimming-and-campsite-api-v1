import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signIn(@Body() userData: LoginDto) {
        return this.authService.signIn(userData.username, userData.password)
    }
}
