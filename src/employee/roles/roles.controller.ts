import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  @Get()
  getRoles(): string {
    return 'Super Admin';
  }
}
