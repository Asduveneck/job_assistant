import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

export abstract class TaskProgressHelper {
  @Column()
  description: string;

  @Column('timestamp', {
    name: 'date_created',
    default: () => 'LOCALTIMESTAMP',
  })
  dateCreated: string;
}
