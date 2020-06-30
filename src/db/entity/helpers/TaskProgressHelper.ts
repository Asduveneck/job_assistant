import { Column } from 'typeorm';

export default abstract class TaskProgressHelper {
  @Column({ nullable: true })
  description: string;

  @Column('timestamp', {
    name: 'date_created',
    default: () => 'LOCALTIMESTAMP',
  })
  dateCreated: string;
}