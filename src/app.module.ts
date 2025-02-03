/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig,  } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [


    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground:true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      }
    }),

    TypeOrmModule.forRoot({
      type: 'postgres', // or 'mysql', 'mariadb', 'sqlite', etc.
      host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: '1234',
			database: 'book',
      entities: ["dist/**/**/*.entity{.ts,.js}"], // Path to your entity files
      synchronize: true, // Set to false in production
    }),
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    AuthModule,
    UserModule,
   BookModule,
  ],
providers:[AppResolver]
})
export class AppModule {}
