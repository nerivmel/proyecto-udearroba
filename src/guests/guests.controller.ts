import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
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
  //traer todos invitado
  @Get()
  findAll() {
    return this.guestsService.findAll();
  }
  //traer un invitado por id
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.guestsService.getOne(id);
  }
  //actualizar invitado por id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto) {
    return this.guestsService.update(id,updateGuestDto);
  }
  //borrar invitado
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestsService.remove(id);
  }
}
