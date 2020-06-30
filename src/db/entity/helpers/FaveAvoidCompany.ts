import { JoinColumn, OneToOne } from 'typeorm';

import Company from '../Company';
import RankHelper from './RankHelper';

export default abstract class FaveAvoidCompany extends RankHelper {
  @OneToOne(type => Company)
  @JoinColumn()
  company: Company;
}
