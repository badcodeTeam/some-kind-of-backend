import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class AddRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Роль'})
    @IsString({message: 'Должно быть строкой'})
    readonly value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly userId: number;
}