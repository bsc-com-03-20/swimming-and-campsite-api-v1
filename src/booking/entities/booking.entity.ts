import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class campsite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  date: Date;

  @Column()
  guests: string;

  @Column()
  location: string;
}
