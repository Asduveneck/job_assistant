import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import Company from './Company';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  person_id: number;

  @ManyToOne(
    type => Company,
    company => company.persons,
  )
  company: Company;

  @Column({ type: 'varchar', length: 50 })
  first_name: string;

  @Column({ type: 'varchar', length: 50 })
  last_name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column()
  title: string;

  @Column({ type: 'json' })
  details: any; // plan this out?

  @Column({ type: 'json' })
  contact_history: any;
}

export default Person;
