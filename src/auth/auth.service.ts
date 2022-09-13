import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterGuestDto } from './dto/register-guest.dto';
import { Guest } from './guest.entity';
import { GuestsRepository } from './guests.repository';

@Injectable()
export class AuthService {
  
  constructor(
    
    @InjectRepository(GuestsRepository)
    private guestsRepository: GuestsRepository,
  ){}

  async registerGuest(registerGuestDto: RegisterGuestDto): Promise<void>{
    return await this.guestsRepository.createGuest(registerGuestDto);
  }
    
  
  /*  
  constructor(private userRepository: Repository<User>) {}

  public findUserById(id: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.id= :id', { id: id });
  }*/
}
