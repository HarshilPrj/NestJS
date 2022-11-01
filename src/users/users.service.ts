import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getusers(): object {
    return { id: 1, name: 'Harshil', phoneNo: 9824131485 };
  }
}
