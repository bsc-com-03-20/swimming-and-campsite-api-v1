import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
 import { User } from './users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost', 
    port: 3306,
    password: '',
    username: 'root',
    database: 'swim_db', 
    entities: [User],
    synchronize: true, 
}),
UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
