import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TemplateColumn } from '../types';

@Entity()
class Template {
  @PrimaryGeneratedColumn()
  templateId: number;

  @Column({ type: 'json', nullable: true })
  coldEmail: TemplateColumn;

  @Column({ type: 'json', nullable: true })
  followUp: TemplateColumn;

  @Column({ type: 'json', nullable: true })
  linkedinAdd: TemplateColumn;

  @Column({ type: 'json', nullable: true })
  misc: TemplateColumn;
}

export default Template;
