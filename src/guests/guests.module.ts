import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from './jwt.constants';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
  JwtModule.register({
    secret:jwtConstants.secret,
    signOptions: { expiresIn: '2h' }
  }),
  
  TypeOrmModule.forFeature([Guest])],
  controllers: [GuestsController],
  providers: [GuestsService],
  exports: [GuestsService],
})
export class GuestsModule {}

