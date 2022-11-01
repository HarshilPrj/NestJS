import { Controller, Get, Param, Bind } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('login/:id')
  @Bind(Param())
  findOne(params) {
    if (params.id == 1) {
      return this.appService.getusers();
    } else {
      return { err: 'Invalid ID' };
    }
  }
}
