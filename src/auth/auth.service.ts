import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-uder.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ){}

  async registerUser(registerUserDto: RegisterUserDto): Promise<void>{
    return this.usersRepository.createUser(registerUserDto);
  }
    
  
  /*  
  constructor(private userRepository: Repository<User>) {}

  public findUserById(id: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.id= :id', { id: id });
  }*/
}
