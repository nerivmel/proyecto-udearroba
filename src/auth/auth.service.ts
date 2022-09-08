import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: Repository<User>) {}

  public findUserById(id: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.id= :id', { id: id });
  }
}
