import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  /**
   *
   */
  constructor(private authService: AuthService) {}

  @Get()
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
  }
}
