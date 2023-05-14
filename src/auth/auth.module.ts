import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
//import { JwtModule } from '@nestjs/jwt';
//import { BcryptService } from 'src/users/bcrypt';
//import { UsersService } from 'src/users/users.service';


@Module({ 
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
}) 
export class AuthModule {}








