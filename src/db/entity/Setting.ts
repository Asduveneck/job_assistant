import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { QuoteColumn } from '../types';

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
  colorPallete: any; // TODO: finalize pallete once FE going. {name: , color_1, color_2, etc.}

  @Column({ type: 'json', nullable: true })
  quote: QuoteColumn;

  @Column({ type: 'bool', default: () => 'TRUE' })
  showQuote: boolean;

  @Column({ type: 'bool', default: () => 'TRUE' })
  showTutorial: boolean;
}

export default Setting;
