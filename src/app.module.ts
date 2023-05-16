import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
 import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import 'reflect-metadata'

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
    autoLoadEntities: true
}),
UsersModule,
AuthModule,
BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
