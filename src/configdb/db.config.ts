import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormconfig : TypeOrmModuleOptions ={

      "type": 'mysql',
      "host": 'localhost',
      "port": 5000,
      "username": 'udea',
      "password": 'udea',
      "database": 'dbudea',
      "entities":[],
      "synchronize": true,
}