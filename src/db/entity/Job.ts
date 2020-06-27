import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { InterviewHistoryColumn } from '../types';
import Company from './Company';
import { DetailsContactHistory } from './helpers';
import { InterviewHistoryColumn } from '../types';

@Entity()
class Job extends DetailsContactHistory {
  @PrimaryGeneratedColumn()
  jobId: number;

  @ManyToOne(
    type => Company,
    company => company.jobs,
    { cascade: ['insert'] },
  )
  company: Company;

  @Column({ type: 'varchar', length: 50, default: () => 'Active' })
  status: string;

  @Column({ type: 'varchar', length: 100 })
  position: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  url: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  resumeUsed: string;

  @Column('timestamp', {
    name: 'date_applied',
    default: () => 'LOCALTIMESTAMP',
  })
  dateApplied: string;

  @Column({ type: 'json', nullable: true })
  interviewHistory: InterviewHistoryColumn;
}

export default Job;
