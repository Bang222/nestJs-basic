import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { CreateUserDto } from "../../dto/CreateUser.dto";

@Injectable()
export class ValidationCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log("Inside ValidateCreateUserPipe>>>>")
    console.log(value)
    console.log(metadata)
    const parseAgeToInt = parseInt(value.age.toString())
    if(isNaN(parseAgeToInt)){
      console.log(`${value.age} is not a number!!!` )
      throw new HttpException("Invalid DAta Type of for property age.Expected number",HttpStatus.BAD_REQUEST);
    }
    console.log(`${parseAgeToInt} is a number returning...` )
    return {...value, age:parseAgeToInt};
  }
}
