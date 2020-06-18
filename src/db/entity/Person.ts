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

  @Column({ type: 'varchar', length: 100, nullable: true })
  linkedinUrl: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  title: string;

  @Column({ type: 'json', nullable: true })
  details: any; // TODO: plan this out more completely.

  @Column({ type: 'json', nullable: true })
  contactHistory: any;
}

export default Person;
