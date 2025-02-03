/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";

/* eslint-disable prettier/prettier */
export class UserService{
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){}


    async findUserByEmail(email:string){
        const data = this.userRepo.findOne({where:{email:email}});
        return data;
    }
}