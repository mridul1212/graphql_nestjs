/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class AddBookArgs{
    @Field()
    title: string

    @Field()
    name: string;


    @Field()
    price: number;
}