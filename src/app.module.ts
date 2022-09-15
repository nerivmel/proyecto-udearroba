import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import sqliteConfig from './sql-lite-conn';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { Repository } from 'typeorm';
import { UsersModule } from './users/users.module';
import { GuestsModule } from './guests/guests.module';
import { Guest } from './guests/entities/guest.entity';




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
      entities:[Guest],
      synchronize: true,
    } 
    ),
    UsersModule,
    GuestsModule,
    
    
  ],
  
  controllers: [],
  providers: [Repository]
 
})
export class AppModule {}
