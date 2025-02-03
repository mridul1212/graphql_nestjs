
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UpdateBookArgs {
    id: string;
    name: string;
    title: string;
    price: number;
}

export interface AddBookArgs {
    title: string;
    name: string;
    price: number;
}

export interface Book {
    id: string;
    title?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
}

export interface IQuery {
    index(): string | Promise<string>;
    sequreData(): string | Promise<string>;
    roleData(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    deleteBook(bookId: string): Nullable<string> | Promise<Nullable<string>>;
    updateBook(args: UpdateBookArgs): Book | Promise<Book>;
    addBook(addBookArgs: AddBookArgs): Book | Promise<Book>;
}

type Nullable<T> = T | null;
