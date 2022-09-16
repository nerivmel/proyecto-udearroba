import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
   

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
