import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Job from './Job';

@Entity()
export class FirstInterview {
  @PrimaryGeneratedColumn()
  interviewId: number;

  @OneToOne(type => Job)
  @JoinColumn()
  job: Job;

  @Column('timestamp', {
    name: 'date_created',
    default: () => 'LOCALTIMESTAMP',
  })
  dateCreated: string;

  @Column('timestamp', {
    name: 'date_scheduled',
  })
  dateScheduled: string;

  @Column()
  notes: string;
}

export default FirstInterview;
