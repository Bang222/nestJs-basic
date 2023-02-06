import { Injectable } from '@nestjs/common';
import { CreateUserType } from "../../../utils/type";

@Injectable()
export class UsersService {
  private fakeUsers = [
    { userName: 'bangdanh', email: 'bang@gmail.com' }
    , { userName: 'banh', email: 'aang@example' },
    { userName: 'banh', email: 'aang@example' }
  ];

  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetail: CreateUserType) {
    this.fakeUsers.push(userDetail);
    console.log('added: ', userDetail);
    return;
  }

  fetchUserById(id: number) {
    return {id:id, userName: 'bangdanh', email: 'bang@gmail.com' };
  }
}