import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'db4free.net', 
    port: 3306,
    password: 'chancellor123@',
    username: 'swimming',
    database: 'swimming',
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
