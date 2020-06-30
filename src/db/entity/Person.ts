import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Company from './Company';
import { DetailsContactHistory } from './helpers';

@Entity()
class Person extends DetailsContactHistory {
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

  @Column({ type: 'varchar', length: 100, nullable: true })
  linkedinUrl: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  title: string;
}

export default Person;
