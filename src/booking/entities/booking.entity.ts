import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Campsite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingtype: string;
  
  @Column()
  roomnumber: number;

  @Column()
  email: string;

  @Column()
  date: Date;

  @Column()
  guests: string;
  
  @Column()
  location: string;

}
