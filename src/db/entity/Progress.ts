import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskProgressHelper } from './helpers';

@Entity()
class Progress extends TaskProgressHelper {
  @PrimaryGeneratedColumn()
  progressId: number;

  @Column({ type: 'varchar', length: 100 })
  timeSpent: string;

  @Column({ type: 'varchar', length: 20 })
  category: string;
}

export default Progress;
