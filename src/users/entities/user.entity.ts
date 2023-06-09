import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: "The unique identifier of the user."})
    id: number; //this id will be auto-generated, don't enter any id in the swagger/postman

    @Column()
    @IsNotEmpty()
    @ApiProperty({ description: "The unique identifier of the user."})
    username: string;


    @Column()
    @IsNotEmpty()
    @ApiProperty({ description: "The unique identifier of the user."})
    firstname: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty({ description: "The unique identifier of the user."})
    email: string;

    @Column()
    @IsNotEmpty()
    @ApiProperty({ description: "The unique identifier of the user."})
    @MinLength(8)
    password: string;
  }