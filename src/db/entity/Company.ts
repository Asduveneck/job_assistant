import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Job from './Job';
import Person from './Person';
import { Details } from './helpers';

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

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ nullable: true })
  careerUrl: string;

  @Column({ nullable: true })
  homeUrl: string;

  @Column({ nullable: true })
  emailPattern: string;

  @Column({ type: 'json', nullable: true })
  otherUrl: any; // array of objects? []{name: url:} ?
}

export default Company;
