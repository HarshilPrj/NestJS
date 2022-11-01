import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userentity } from '../users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([userentity])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
