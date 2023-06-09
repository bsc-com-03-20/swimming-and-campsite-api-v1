import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Campsite {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @ApiProperty({ description: "The unique identifier of the user."})
  id: number; // it will be auto generated 

  @Column()
  @IsNotEmpty()
  @ApiProperty({ description: "The unique bookingtype of the user."})
  bookingtype: string;
  
  @Column()
  @IsNotEmpty()
  @ApiProperty({ description: "The unique room number of the user."})
  roomnumber: number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ description: "The unique username of the user."})
  email: string;

  @Column()
  @ApiProperty({ description: "The unique date of the user booked."})
  date: Date; // it will be auto generated

  @Column()
  @ApiProperty({ description: "The unique name of the user."})
  guests: string;
  
  @Column()
  @ApiProperty({ description: "The  location of the user want to book campsite name and where located."})
  location: string;

}
