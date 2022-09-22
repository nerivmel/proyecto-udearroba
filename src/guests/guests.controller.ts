import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest } from './entities/guest.entity';
import { FindOneOptions, FindOptionsWhere } from 'typeorm';
import { LoginGuestDto } from './dto/login-guest.dto';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  //login
  @Post('login')
  loginGuest(@Body() guestObjectLogin:LoginGuestDto){
    return this.guestsService.login(guestObjectLogin);
  }

  //register
  @Post()
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestsService.create(createGuestDto);
  }

  @Get()
  findAll() {
    return this.guestsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.guestsService.getOne(id);

  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto): string {
    return this.guestsService.update(+id, updateGuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestsService.remove(+id);
  }
}
