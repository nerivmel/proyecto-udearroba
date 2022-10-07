import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest } from './entities/guest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginGuestDto } from './dto/login-guest.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

//__________Encriptacion de contraseña
const bcrypt = require('bcryptjs');
const saltRounds = 10;

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest) private guestsRepository: Repository<Guest>,
    private jwtService:JwtService
  ) {}

//login
async login(guestObjectLogin:LoginGuestDto){
    const {username, password} = guestObjectLogin;
    const findGuest = await this.guestsRepository.findOne({
      where:{username}
    }); 
    if(!findGuest) throw new BadGatewayException ('NO_SE_ENCONTRO_EL_USUARIO');
    const checkPassword = await compare(password, findGuest.password);
    if(!checkPassword) throw new BadGatewayException ('CONTRASEÑA_INCORRECTA');
//Generando Token
    const payload = {name: findGuest.name, username: findGuest.username};
    const token = this.jwtService.sign(payload);
    const data = {
      guestEmail:findGuest.email,
      guestName:findGuest.name,
      guestUsername: findGuest.username,
      guestLastName: findGuest.lastname,
      guestOrganization: findGuest.organization,
      token,
    }
    return data;
  }
//______INICIO_______creando nuevo invitado__________________________________________________________________
async create(newGuest: CreateGuestDto) {
    const {email,name,username,password,organization,lastname} = newGuest;
    const guestExist = await this.guestsRepository.findOne({where:{email}})
      if (guestExist){
        throw new BadGatewayException(`ya existe un usuario registrado con el email #${email}`);
      } 
    let guestsR = this.guestsRepository;
    const passwordHash = await bcrypt.hash(newGuest.password, 10);
    newGuest.password = passwordHash;
    console.log (newGuest);
    return guestsR.save(newGuest); 
  }
//_______FIN_________creando nuevo invitado___________________________________________________________________
  
//________INICIO______Traer todos los invitados_______________________________________________________________
async findAll() {
    return await this.guestsRepository.find({
      select:{
        name:true,
        lastname:true,
        organization:true,
        email:true,
        password:false
      }});
  }
//________FIN__________Traer todos los invitados______________________________________________________________

//______INICIO_______Traer invitado por ID____________________________________________________________________
  async getOne(id:string) {
    const guest = await this.guestsRepository.findOne({
      select:{
        name:true,
        lastname:true,
        organization:true,
        email:true,
        password:false
      },
      where:{id}});
    if (!guest) throw new NotFoundException('El usuario no existe')
    return guest;
  }
//______FIN_________Traer invitado por ID ____________________________________________________________________

//______INICIO_______Actualizar invitado_______________________________________________________________________
  async update(id: string, updateGuestDto: UpdateGuestDto) {
  const guest =await this.guestsRepository.update(id,updateGuestDto)
      if (!guest) throw new NotFoundException('El usuario no existe')
      return this.guestsRepository.update(id,updateGuestDto);
  }
//_____FIN___________Actualizar invitado_______________________________________________________________________

//_____INICIO_________ Eliminar Invitado_______________________________________________________________________
  async remove(id: string) {
    return await this.guestsRepository.delete(id);
  } 
}
//____FIN_____________Eliminar invitado________________________________________________________________________
