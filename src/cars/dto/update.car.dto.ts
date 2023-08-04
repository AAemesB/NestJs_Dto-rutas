import { IsOptional, IsString, IsUUID } from "class-validator";

//El dto esta conectado a ValidationPipe a traves de la clase class-validator
export class UpdateCarDto {
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsOptional()
    readonly marca?: string;

    @IsString()
    @IsOptional()
    readonly modelo?: string;
}