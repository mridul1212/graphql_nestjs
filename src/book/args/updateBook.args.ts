/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from "@nestjs/graphql";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@InputType()
export class UpdateBookArgs{
    
     
    @Field(() => String) 
    id: string

    
    @Field()
    name: string;


    @Field()
    title: string;


    @Field(() => Int,)
    price: number;
}