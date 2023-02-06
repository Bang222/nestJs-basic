import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("example middleware");
    // 2 things notice: check header
    console.log("CHECK>> Authorization", req.headers.authorization);
    const {authorization} = req.headers;
    if(!authorization) throw new HttpException('No Authorazation Token', HttpStatus.FORBIDDEN);
    if(authorization === 'zeus') next();
    else
      throw new HttpException(
        'Invalid Authorazation Token', HttpStatus.FORBIDDEN
      )
  }
}
