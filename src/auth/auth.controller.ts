import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { threadId } from 'worker_threads';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {
  /**
   *
   */
  constructor(private authService: AuthService) {}

  /*DECORATOR POST:buscar en el cuerpo de la peticion (Body) atributos (name mail o password) 
  y si los encuentra los popula en el dto para pasar de controlador al servicio 
  del servicio al repositorio y el repositorio lo va a guardar en la base de datos*/
  
}
