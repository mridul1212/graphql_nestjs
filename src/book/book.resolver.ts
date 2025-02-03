/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { BookService } from "./book.service";
import { UpdateBookArgs } from "./args/updateBook.args";
import { BookEntity } from "./entity/book.entity";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { NotFoundException } from "@nestjs/common";
import { AddBookArgs } from "./args/addbook.args";

@Resolver((of)=>Book)
export class BookResolver{
    constructor(private readonly bookServicxe:BookService){}
    
    @Query(returns=>[Book],{name:"books"})
    getAllBooks(){
        return this.bookServicxe.fingAllBook();
    }

    @Query(() => Book, { nullable: true,name:"bookById" }) 
    async getBookById(@Args("bookId", { type: () => String }) bookId: string) {
        return await this.bookServicxe.findBookById(bookId);
     
    }


    @Mutation(() => String, { nullable: true,name:"deleteBook" }) 
    async deleteBookById(@Args("bookId", { type: () => String }) bookId: string) {
        return await this.bookServicxe.deleteBook(bookId);
     
    }

    @Mutation(() => Book)
  async updateBook(@Args('args') args: UpdateBookArgs): Promise<Book> {
    console.log('datada');
    
        return this.bookServicxe.updateBook(args);
    }
  


    @Mutation(() => Book)
  async addBook(@Args('addBookArgs') args: AddBookArgs): Promise<Book> {
    return this.bookServicxe.addBook(args);  // Returns a Book object
  }

}