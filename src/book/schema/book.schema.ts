/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Book{
  
    @Field()
    id:string;

    @Field({nullable:true})
    title:string;

    @Field({nullable:true})
    name:string;

    @Field((type)=> Int,{nullable:true})
    price:number;

}