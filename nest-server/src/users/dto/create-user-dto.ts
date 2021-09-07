import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'test@test.test', description: 'Email'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({},{message: 'Некорректный email'})
    readonly email:string;

    @ApiProperty({example: '123456789', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4,16, {message: 'Пароль должен быть от 4 до 16 символов'})
    readonly password:string;
}