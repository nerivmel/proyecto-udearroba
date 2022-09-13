import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  

    
  
  /*  
  constructor(private userRepository: Repository<User>) {}

  public findUserById(id: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.id= :id', { id: id });
  }*/
}
