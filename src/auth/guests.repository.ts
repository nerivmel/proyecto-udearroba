import{EntityRepository, Repository}from "typeorm"
import { Guest } from "./guest.entity";

@EntityRepository(Guest)
export class GuestsRepository extends Repository<Guest>{

}