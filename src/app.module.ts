import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import sqliteConfig from './sql-lite-conn';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { Repository } from 'typeorm';
import { UsersModule } from './users/users.module';
import { GuestsModule } from './guests/guests.module';




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
      entities:[],
      synchronize: true,
    } 
    ),
    TypeOrmModule.forFeature([]),
    UsersModule,
    GuestsModule,
    
    
  ],
  
  controllers: [AuthController],
  providers: [AuthService,Repository]
 
})
export class AppModule {}
