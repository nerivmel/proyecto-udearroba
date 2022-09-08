import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './auth/guest.entity';
import { User } from './auth/user.entity';
import { UsersRepository } from './auth/users.repository';
import { UserController } from './user/user.controller';
import sqliteConfig from './sql-lite-conn';
import { AuthController } from './auth/auth.controller';
import { LibroService } from './libro/libro.service';
import { AuthService } from './auth/auth.service';
import { Repository } from 'typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      /* sqliteConfig */
       {
      type: 'mysql',
      host: 'localhost',
      port: 5000,
      username: 'udea',
      password: 'udea',
      database: 'dbudea',
      entities:[User, Guest],
      synchronize: true,
    } 
    ),
    TypeOrmModule.forFeature([UsersRepository])
    
  ],
  
  controllers: [AuthController,UserController],
  providers: [AuthService,LibroService,Repository],
 
})
export class AppModule {}
