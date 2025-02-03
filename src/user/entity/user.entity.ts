/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User{
    @PrimaryGeneratedColumn("uuid")
     id: string;

     @Column()
     firstName: string;

     @Column()
     lastName: string;

     @Column()
     email: string;

     @Column()
     password: string;

     @Column()
     role: string;

}