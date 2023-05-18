import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campsite} from './entities/booking.entity';
  
@Injectable()
export class BookingService {
 
  constructor(
    @InjectRepository(Campsite)
    private readonly bookingRepository: Repository<Campsite>,
  ) {}
  async createBooking(book: Campsite): Promise<Campsite> {
     return this.bookingRepository.save(book)
  }

  async getBookingById(id: number): Promise<Campsite> {
    return this.bookingRepository.findOne({ where: { id } });
  }

  async updateBooking(id: number, bookingDtos: Campsite,): Promise<Campsite> {
    const booking = await this.getBookingById(id);
    this.bookingRepository.merge(booking, bookingDtos);
    return this.bookingRepository.save(booking);
  }

 
    async delete(id: number): Promise<void> {
    const existingBooking = await this.bookingRepository.delete(id);
       if (!existingBooking) {
      throw new Error(`A guest with id ${id} not found`);  
      }
      await this.bookingRepository.delete(id);
}
  } 