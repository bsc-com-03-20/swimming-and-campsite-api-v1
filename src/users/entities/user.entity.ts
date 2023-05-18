import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; //this id will be auto-generated, don't enter any id in the swagger/postman

    @Column()
    username: string;

    @Column()
    firstname: string;

    @Column()
    email: string;

    @Column()
    password: string;
  }