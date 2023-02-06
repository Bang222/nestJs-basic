import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  userName:string;

  @IsEmail()
  @IsNotEmpty()
  email:string;

  @IsNotEmpty()
  age:number;
}