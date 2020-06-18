import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import Company from './Company';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  jobId: number;

  @ManyToOne(
    type => Company,
    company => company.jobs,
  )
  company: Company;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @Column({ type: 'varchar', length: 100 })
  position: string;

  @Column({ type: 'varchar', length: 100 })
  url: string;

  @Column({ type: 'varchar', length: 30 })
  source: string;

  @Column({ type: 'varchar', length: 30 })
  resumeUsed: string;

  @Column('timestamp', {
    name: 'applied_date',
    default: () => 'LOCALTIMESTAMP',
  })
  appliedDate: string;

  @Column({ type: 'json' })
  details: any; // plan this out?

  @Column({ type: 'json' })
  contactHistory: any;

  @Column({ type: 'json' })
  interviewHistory: any;
}

export default Job;
