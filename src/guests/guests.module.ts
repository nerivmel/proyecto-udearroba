import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
   
  TypeOrmModule.forFeature([Guest])],
  controllers: [GuestsController],
  providers: [GuestsService],
  exports: [GuestsService],
})
export class GuestsModule {}
