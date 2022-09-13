import {CreateDateColumn, Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm'


@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    avatar:number;

    @Column({length:100})
    coordX:string;

    @Column({length:100})
    coordY:string;

    @Column({length:100})
    coordZ:string

    @CreateDateColumn()
    lastConnection:Date

    @Column({length:255})
    status:string;

    @Column({length:255})
    role:string;

    @Column({length:255})
    userName:string;

    @OneToOne(() => User)
    @JoinColumn()
    invitado_id:string;
}
