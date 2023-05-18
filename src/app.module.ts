import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost', 
    port: 3306,
    password: '',
    username: 'root',
    database: 'malawiCamps',
    autoLoadEntities: true,
    synchronize: true, 
   
}),
UsersModule,
AuthModule,
BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
