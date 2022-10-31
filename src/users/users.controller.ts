import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getusers(): object {
    return this.appService.getusers();
  }
}
