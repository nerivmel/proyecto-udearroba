import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersModule } from './users/users.module';
import { GuestsModule } from './guests/guests.module';
import { Guest } from './guests/entities/guest.entity';
import { User } from './users/entities/user.entity';


@Module({
  imports: [
    
    TypeOrmModule.forRoot(
      {
      type: 'mysql',
      host: 'localhost',
      port: 5000,
      username: 'udea',
      password: 'udea',
      database: 'dbudea',
      entities:[Guest,User],
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
