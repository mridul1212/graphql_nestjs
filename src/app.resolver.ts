/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { UseGuards } from "@nestjs/common";
import { Args, Context, Query, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "./auth/auth.guard";
import { User } from "./user/entity/user.entity";

import * as jwt from "jsonwebtoken";
import { last } from "rxjs";
import { JwtGuard } from "./auth/jwt.guard";
import { RoleGuard, Roles } from "./auth/role.guard";

@Resolver(of => String)
export class AppResolver{
    @Query(returns => String)
    index():string{
        return "Nest Js";
    }
    


  
    @Query(returns => String)
    @UseGuards(JwtGuard)
    sequreData( @Context("user") user:User):string{
        return "This is sequre data"+JSON.stringify(user);
    }

    @Query(returns => String)
    @UseGuards(JwtGuard,new RoleGuard(Roles.Admin))
    roleData( @Context("user") user:User):string{
        return "This is sequre datarole datadatdaa  "+JSON.stringify(user);
    }



    @Query(returns => String)
    @UseGuards(AuthGuard)
    login(@Args({name:'email',type:()=>String}) email:string, 
    @Args({name:'password',type:()=>String}) password:string,
    @Context("user") user:User)
    :string{

        const payload = {
            id:user.id,
            firstName: user.firstName,
            lastName:user.lastName,
            email:user.email,
            role:user.role

        }
        return jwt.sign(payload,"key", {expiresIn: "600s"});
    }
}