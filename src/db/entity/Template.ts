import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Template {
  @PrimaryGeneratedColumn()
  templateId: number;

  @Column({ type: 'json', nullable: true })
  coldEmail: any; // {name: string, template: string}

  @Column({ type: 'json', nullable: true })
  followUp: any; // {name: string, template: string}

  @Column({ type: 'json', nullable: true })
  linkedinAdd: any; // {name: string, template: string}

  @Column({ type: 'json', nullable: true })
  misc: any; // {name: string, template: string}
}

export default Template;
