import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'test@test.test', description: 'Email'})
    readonly email:string;

    @ApiProperty({example: '123456789', description: 'Пароль'})
    readonly password:string;
}