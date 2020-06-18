import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Company from './Company';

@Entity()
class Person {
  @PrimaryGeneratedColumn()
  personId: number;

  @ManyToOne(
    type => Company,
    company => company.persons,
    { cascade: ['insert'] },
  )
  company: Company;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'varchar', length: 100 })
  linkedinUrl: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'json' })
  details: any; // TODO: plan this out more completely.

  @Column({ type: 'json' })
  contactHistory: any;
}

export default Person;
