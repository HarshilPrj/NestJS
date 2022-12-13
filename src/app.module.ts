import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
// import { EmployeeModule } from './employee/employee.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users/users.service';
// import { UsersModule } from './users/users.module';
// import { userentity } from './users/users.entity';
import { config } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
