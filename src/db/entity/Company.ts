import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Person from './Person';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @OneToMany(
    type => Person,
    person => person.company,
  )
  persons: Person[];

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column()
  career_url: string;

  @Column()
  home_url: string;

  @Column()
  email_pattern: string;

  @Column({ type: 'json' })
  details: any; // plan this out?

  @Column({ type: 'json' })
  other_url: any;
}

export default Company;
