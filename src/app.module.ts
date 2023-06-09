import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'sql10.freesqldatabase.com', 
    port: 3306,
    password: 'zMCgcP8Ph9',
    username: 'sql10624834',
    database: 'sql10624834',
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
