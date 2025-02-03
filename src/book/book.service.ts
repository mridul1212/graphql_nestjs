/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { BookEntity } from "./entity/book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AddBookArgs } from "./args/addbook.args";
import { UpdateBookArgs } from "./args/updateBook.args";

@Injectable()
export class BookService{

    constructor(@InjectRepository(BookEntity)  private readonly bookRepo:Repository<BookEntity>){}

    async fingAllBook():Promise<BookEntity[]>{
        const books = await this.bookRepo.find();
        return books;
    }

    async findBookById(id:string):Promise<BookEntity>{
        const data  = await this.bookRepo.findOne({
            where:{id:id}
        })
        return data;
    }


    async deleteBook(id:string):Promise<String>{
      await this.bookRepo.delete(id);
        return "Book Deleted";
    }
   
    async addBook(addBook: AddBookArgs): Promise<BookEntity> {
        // Create a new Book entity using AddBookArgs
        const newBook = this.bookRepo.create(addBook);
        
        // Save the new book into the database
        await this.bookRepo.save(newBook);
    
        return newBook;  // Return the saved Book entity
      }
      async updateBook(args: UpdateBookArgs): Promise<BookEntity> {
        console.log("datad-122");
        
        // Find the book by its ID
        const book = await this.bookRepo.findOne({ where: { id: args.id } });
        console.log(book);
        
    
        // If the book is not found, throw an exception
        if (!book) {
            throw new NotFoundException("Book not found");
        }
    
        // Update the properties of the book with the provided arguments
        if (args.name) book.name = args.name;
        if (args.title) book.title = args.title;
        if (args.price) book.price = args.price;
    
        // Save and return the updated book
        return await this.bookRepo.save(book);
    }
}