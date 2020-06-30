import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TaskProgressHelper } from './helpers/helpers';

@Entity()
class Progress extends TaskProgressHelper {
  @PrimaryGeneratedColumn()
  progressId: number;

  @Column({ type: 'int', width: 200 })
  timeSpent: number;

  @Column({ type: 'varchar', length: 20 })
  category: string;
}

export default Progress;
