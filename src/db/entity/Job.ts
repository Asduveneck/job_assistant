import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Company from './Company';
import { DetailsContactHistory } from './helpers';

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
  interviewHistory: any;
}

export default Job;
