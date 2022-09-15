import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest } from './entities/guest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder, Connection } from 'typeorm';




const bcrypt = require('bcryptjs');
const saltRounds = 10;

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest) private guestsRepository: Repository<Guest>,
  ) {}
//______INICIO_______creando nuevo invitado_____________________________________________
 
async create(newGuest: CreateGuestDto) {
    let guestsR = this.guestsRepository;
    const passwordHash = await bcrypt.hash(newGuest.password, 10);
    newGuest.password = passwordHash;
    console.log (newGuest);
    return guestsR.save(newGuest);
    
  }
//_______FIN_________creando nuevo invitado_______________________________________________________________
  
findAll() {
    return `This action returns all guests`;
  }
//______INICIO_______Traer invitado por ID____________
 
  async findById(guestId: string) {
    const guest = await createQueryBuilder('guests')
      .where('guests.id = :id', { id: guestId })
      .getOne();

    return guest;
  }
//______FIN_________Traer invitado por ID ______________

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}
