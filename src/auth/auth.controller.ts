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
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-uder.dto';

@Controller('auth')
export class AuthController {
  /**
   *
   */
  constructor(private authService: AuthService) {}

  /*DECORATOR POST:buscar en el cuerpo de la peticion (Body) atributos (name mail o password) 
  y si los encuentra los popula en el dto para pasar de controlador al servicio 
  del servicio al repositorio y el repositorio lo va a guardar en la base de datos*/
  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto): Promise<void>{
    return this.authService.registerUser(registerUserDto);
  }



  /*@Get()
  getUsers() {
    return 'altoquenomas';
  }

  @Get(':id')
  getUser(@Res() res, @Param('id') params) {
    const user = this.authService.findUserById(params);
    if (user != null) {
      console.log('estoy aqui');
      return user;
    }
    console.log('estoy aqui');
    return res.status(HttpStatus.NOT_FOUND).send(`No existe`);
  }*/
}
