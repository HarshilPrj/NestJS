import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getusers(): object {
    return { id: 1, name: 'Harshil', phoneNo: 9824131485 };
  }
}
