import { IsNotEmpty, IsString, Length,  IsEmail } from "class-validator";

export class RegisterGuestDto {
    
    @IsNotEmpty()
    @IsString()
    @Length(1-100)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    
    @Length(6-20)
    password: string
    
}