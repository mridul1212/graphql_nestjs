/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entity/book.entity';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';


@Module({
  imports: [
   TypeOrmModule.forFeature([BookEntity])

  ],
  controllers:[],
providers:[BookResolver,BookService]
})
export class BookModule {}
