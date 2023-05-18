import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
 import { User } from './entities/user.entity';
//import { Bcrypt } from './bcrypt';
 

@Controller('Users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userInfo: User): Promise<User> {
    return this.usersService.createUser(userInfo);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<any> {
    const user = await this.usersService.getUserById(id);
    return { user };
    // return this.userService.getUserById(id);
  }
 
  @Put(':id')
  async updateUser(
    @Param('id') id: number, @Body() userData: User,
  ): Promise<User> {
    return this.usersService.updateUser(id, userData);
  }


  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<{ message: string }> {
    await this.usersService.delete(id);
    return { message: 'User with id ${id} has been deleted successfully' };
    // return this.userService.deleteUser(id);
   } 
}
 