import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { Booking } from './booking.entity';
import { BookingDto } from './dto/booking.dto';
import { campsite } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(campsite)
    private readonly bookingRepository: Repository<campsite>,
  ) {}

  async createBooking(createBookingDto: BookingDto): Promise<any> {
    const {name, email, date, guests, location} = createBookingDto
    const bookingDetails = this.bookingRepository.create({name, location,email, date, guests})

   return await this.bookingRepository.save(bookingDetails);
  }
}
