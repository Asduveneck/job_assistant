import { Column } from 'typeorm';

import { DetailColumn } from '../../types';

export default abstract class Details {
  @Column({ type: 'json', nullable: true })
  detail: DetailColumn;
}
