import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidJob } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class FavoriteJob extends FaveAvoidJob {
  @PrimaryGeneratedColumn()
  favJobId: number;
}