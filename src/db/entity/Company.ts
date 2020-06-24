import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Index,
} from 'typeorm';
import Job from './Job';
import Person from './Person';
import { Details } from './helpers';
import { UrlColumn } from '../types';

@Entity()
class Company extends Details {
  @PrimaryGeneratedColumn()
  companyId: number;

  @OneToMany(
    type => Person,
    person => person.company,
  )
  persons: Person[];

  @OneToMany(
    type => Job,
    job => job.company,
  )
  jobs: Job[];

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ nullable: true })
  careerUrl: string;

  @Column({ nullable: true })
  homeUrl: string;

  @Column({ nullable: true })
  emailPattern: string;

  @Column({ type: 'json', nullable: true })
  otherUrl: UrlColumn;
}

export default Company;
