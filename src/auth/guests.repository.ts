import { CustomRepository } from "src/database/typeorm-ex.decorator";
import{ Repository}from "typeorm"
import { RegisterGuestDto } from "./dto/register-guest.dto";
import { Guest } from "./guest.entity";
import * as bcrypt from 'bcrypt';

@CustomRepository(Guest)
export class GuestsRepository extends Repository<Guest>{

    async createGuest(registerGuestDto:RegisterGuestDto): Promise<void>  {
        const {name, email, password}=  registerGuestDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hashedPassword(password,salt)
        
        const guest = this.create({name, email, password: hashedPassword});
        await this.save(guest);
    } 


}