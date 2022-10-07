import { IsNotEmpty } from "class-validator";
export class LoginGuestDto{

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string
}