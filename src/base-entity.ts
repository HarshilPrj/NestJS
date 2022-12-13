import { CreateDateColumn, Generated, PrimaryColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @CreateDateColumn({ nullable: false })
  updatedAt: Date;

  @CreateDateColumn({ nullable: false })
  deletedAt: Date;
}
