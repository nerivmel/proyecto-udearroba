import { IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
   
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    username: string;
  
    @IsNotEmpty()
    email: string;
  
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    organization: string;

}
