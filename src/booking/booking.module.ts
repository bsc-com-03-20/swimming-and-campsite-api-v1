import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Booking } from './booking.entity';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { campsite } from './entities/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([campsite])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
