/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entity/user.entity';
import { JwtGuard } from './jwt.guard';
import { RoleGuard } from './role.guard';




@Module({
  imports: [
    UserModule,
   TypeOrmModule.forFeature([User])

  ],
  controllers:[],
providers:[AuthGuard,UserService,JwtGuard,RoleGuard]
})
export class AuthModule {}
