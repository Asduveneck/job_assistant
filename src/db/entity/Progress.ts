import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { TaskProgressHelper } from './helpers';

@Entity()
export class Progress extends TaskProgressHelper {
  @PrimaryGeneratedColumn()
  progressId: number;

  @Column({ type: 'varchar', length: 100 })
  timeSpent: string;

  @Column({ type: 'varchar', length: 15 })
  category: string;
}

export default Progress;
