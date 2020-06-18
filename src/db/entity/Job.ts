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
  details: any; // plan this out?

  @Column({ type: 'json', nullable: true })
  contactHistory: any; // TODO: object where keys are dates and notes are values, or an array of dates and an array of notes. OR store as an array of {date: 'timestamp' note:'text'}

  @Column({ type: 'json', nullable: true })
  interviewHistory: any;
}

export default Job;
