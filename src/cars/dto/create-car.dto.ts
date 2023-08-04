import { IsString } from "class-validator";

//El dto esta conectado a ValidationPipe a traves de la clase class-validator
export class CreateCarDto {
    
    @IsString({message: `La marca debe ser string`})
    readonly marca: string;

    @IsString()
    readonly modelo: string;
}