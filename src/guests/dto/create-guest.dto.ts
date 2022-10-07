import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateGuestDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    username: string;
  
    
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    organization: string;

}
