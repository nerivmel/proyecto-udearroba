import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from './users.repository';
import {GuestsRepository} from './guests.repository';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository,GuestsRepository])],
  controllers: [AuthController],
  providers: [AuthService,]
})
export class AuthModule {}
