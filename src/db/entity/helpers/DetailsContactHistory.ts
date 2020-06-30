import { Column } from 'typeorm';

import { ContactHistoryColumn } from '../../types';
import Details from './Details';

export default abstract class DetailsContactHistory extends Details {
  @Column({ type: 'json', nullable: true })
  contactHistory: ContactHistoryColumn;
}
