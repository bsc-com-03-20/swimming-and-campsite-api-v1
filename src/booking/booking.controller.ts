import { Controller, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDto } from './dto/booking.dto';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async Booking(@Body() bookingDto: BookingDto) {
    return this.bookingService.createBooking(bookingDto)
  }
}
