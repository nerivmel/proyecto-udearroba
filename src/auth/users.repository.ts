import{EntityRepository, Repository}from "typeorm"
import { RegisterUserDto } from "./dto/register-uder.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User>{

    async createUser (RegisterUserDto: RegisterUserDto): Promise <void> {

    }
}