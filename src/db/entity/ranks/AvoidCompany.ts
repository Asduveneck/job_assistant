import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { FaveAvoidCompany } from '../helpers';

@Entity({ orderBy: { rank: 'ASC' } })
export default class AvoidCompany extends FaveAvoidCompany {
  @PrimaryGeneratedColumn()
  avoidCompanyId: number;
}
