import {  ApiProperty, } from "@nestjs/swagger";

export class CreateUserDto {
     @ApiProperty({
        description:"username of the user",
        example: "Emmanuel Kamanga",
     })
     user_name: string;
}
