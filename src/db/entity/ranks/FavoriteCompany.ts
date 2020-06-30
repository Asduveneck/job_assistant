import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidCompany } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class FavoriteCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  favCompanyId: number;
}