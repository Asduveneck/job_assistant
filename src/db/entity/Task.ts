import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { TaskProgressHelper } from './helpers';

@Entity()
export class Task extends TaskProgressHelper {
  @PrimaryGeneratedColumn()
  taskId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  status: string;
}

export default Task;
