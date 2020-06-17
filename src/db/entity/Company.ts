import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column()
  career_url: string;

  @Column()
  home_url: string;

  @Column()
  email_pattern: string;

  @Column({ type: 'json' })
  details: any;

  @Column({ type: 'json' })
  other_urls: any;
}
