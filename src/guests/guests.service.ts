import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest } from './entities/guest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder, Connection, FindOptionsWhere, FindOneOptions } from 'typeorm';
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


//______INICIO_______creando nuevo invitado_____________________________________________
 
async create(newGuest: CreateGuestDto) {
    const {email,name,username,password,organization,lastname} = newGuest;
    const guestExist = await this.guestsRepository.findOne({
      where:{email}
    })
    if (guestExist){
      throw new BadGatewayException(`ya existe un usuario registrado con el email #${email}`);
    } 
    let guestsR = this.guestsRepository;
    const passwordHash = await bcrypt.hash(newGuest.password, 10);
    newGuest.password = passwordHash;
    console.log (newGuest);
    return guestsR.save(newGuest);
    
  }
//_______FIN_________creando nuevo invitado_______________________________________________________________
  
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


//______INICIO_______Traer inZitado por ID_______________
 
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
//______FIN_________Traer invitado por ID _______________

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}

