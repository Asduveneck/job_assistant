import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidCompany } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export class AvoidCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  avoidCompanyId: number;
}