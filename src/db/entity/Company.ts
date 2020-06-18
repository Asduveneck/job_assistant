import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Job from './Job';
import Person from './Person';

@Entity()
class Company {
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

  @Column()
  careerUrl: string;

  @Column()
  homeUrl: string;

  @Column()
  emailPattern: string;

  @Column({ type: 'json' })
  details: any; // plan this out?

  @Column({ type: 'json' })
  otherUrl: any;
}

export default Company;
