import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Company from './Company';

@Entity()
class Job {
  @PrimaryGeneratedColumn()
  jobId: number;

  @ManyToOne(
    type => Company,
    company => company.jobs,
    { cascade: ['insert'] },
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
    name: 'date_applied',
    default: () => 'LOCALTIMESTAMP',
  })
  dateApplied: string;

  @Column({ type: 'json' })
  details: any; // plan this out?

  @Column({ type: 'json' })
  contactHistory: any; // TODO: object where keys are dates and notes are values, or an array of dates and an array of notes. OR store as an array of {date: 'timestamp' note:'text'}

  @Column({ type: 'json' })
  interviewHistory: any;
}

export default Job;
