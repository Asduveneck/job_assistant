import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export abstract class TaskProgressHelper {
  @Column({ nullable: true })
  description: string;

  @Column('timestamp', {
    name: 'date_created',
    default: () => 'LOCALTIMESTAMP',
  })
  dateCreated: string;
}

@Entity()
class Setting {
  @PrimaryGeneratedColumn()
  settingId: number;

  @Column({ type: 'json', nullable: true })
  colorPallete: any; // {name: , color_1, color_2, etc.}

  @Column({ type: 'json', nullable: true })
  quote: any; // {person: string, quote: string}

  @Column({ type: 'bool', default: () => 'FALSE' })
  showQuote: boolean; //

  @Column({ type: 'bool', default: () => 'FALSE' })
  showTutorial: boolean; //
}

export default Setting;
