import { Column } from 'typeorm';

import {Details} from './Details'
import { ContactHistoryColumn } from '../../types';


export abstract class DetailsContactHistory extends Details {
  @Column({ type: 'json', nullable: true })
  contactHistory: ContactHistoryColumn;
}
