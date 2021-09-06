import { ApiProperty } from "@nestjs/swagger";


export class AddRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Роль'})
    readonly value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    readonly userId: number;
}