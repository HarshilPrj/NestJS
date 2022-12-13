import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from './users/users.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'vga.cz0cxtjkdphj.ap-south-1.rds.amazonaws.com',
  username: 'sa',
  password: 'sa123456',
  database: 'coodeit',
  synchronize: true,
  entities: [Users],
};
