import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidJob } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class InterestedJob extends FaveAvoidJob {
  @PrimaryGeneratedColumn()
  interestedJobId: Number;
}