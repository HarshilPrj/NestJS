import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
export class Basicentity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ nullable: true })
  createAt?: Date;
  @CreateDateColumn({ nullable: true })
  updateAt?: Date;
}
