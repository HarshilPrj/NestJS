import { BaseEntity } from 'src/base-entity';
import { Column, Entity } from 'typeorm';

@Entity('users_details')
export class Users extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;
}
