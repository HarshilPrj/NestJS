import { Entity, Column } from 'typeorm';
import { Basicentity } from './../basic.entity';

@Entity('entity.user_data')
export class userentity extends Basicentity {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  DOB: string;
}
