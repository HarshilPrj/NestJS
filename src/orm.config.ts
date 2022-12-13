import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from './users/users.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'hp123',
  database: 'coodeit',
  synchronize: true,
  entities: [Users],
};
