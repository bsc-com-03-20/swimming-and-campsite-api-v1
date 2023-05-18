import { Controller, Post, Put, Body, Param, Get, Delete } from '@nestjs/common';
import { userInfo } from 'os';
 import { BookingService } from './booking.service';
import { BookingDto } from './dto/booking.dto';
import { Campsite } from './entities/booking.entity';

@Controller('booking')
export class BookingController {
  
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(@Body() book: Campsite): Promise<Campsite> {
    return this.bookingService.createBooking(book);
  }
 
  
  @Get(':id')
  async getBookingById(@Param('id') id: number): Promise<any> {
    const booking = await this.bookingService.getBookingById(id);
    return { booking };   
   }
 
  @Put(':id')
  async updateBooking(
    @Param('id') id: number, @Body() bookingDtos: Campsite,): Promise<Campsite> {
    return this.bookingService.updateBooking(id, bookingDtos);
  }


  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<string > {
    await this.bookingService.delete(id);
    return 'Booking Type id has been deleted successfully';
    } 
}


