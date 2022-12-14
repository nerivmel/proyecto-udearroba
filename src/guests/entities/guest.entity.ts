import { table } from "console";
import {Column, Entity, PrimaryGeneratedColumn, Table} from "typeorm"

@Entity()

export class Guest {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;
    
    @Column({length:100})
    name:string;

    @Column({length:100})
    lastname:string;

    @Column({length:100})
    username:string

    @Column({length:100, unique: true})
    email:string

    @Column({length:255})
    password:string

    @Column({length:100})
    organization:string
}
