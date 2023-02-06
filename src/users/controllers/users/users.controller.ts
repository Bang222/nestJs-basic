import {
  Body,
  Controller,
  Get,
  HttpException, HttpStatus,
  Param, ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res, UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { CreateUserDto } from "../../dto/CreateUser.dto";
import {Response,Request} from "express";
import { UsersService } from "../../services/users/users.service";
import { ValidationCreateUserPipe } from "../../pipes/validation-create-user/validation-create-user.pipe";
import { AuthGuard } from "../../guards/auth/auth.guard";

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  getUsers() {
    return this.usersService.fetchUser()
  }

  @Post('create')
  // validation Data from user
  @UsePipes(new ValidationPipe())
  // call this data transform object
  createUser(@Body(ValidationCreateUserPipe) userData: CreateUserDto) {
    //toPrecition() convert typeOf (string to number)
    console.log (userData.age.toPrecision())
    this.usersService.createUser(userData);
    return userData;
  }

  @Get(':id')
  //validate route parameters
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const userID: any = this.usersService.fetchUserById(id);
    if(!userID){
      throw new HttpException('User not found',HttpStatus.BAD_REQUEST);
    }
    console.log('Get User', userID)
    return userID
  }
}
