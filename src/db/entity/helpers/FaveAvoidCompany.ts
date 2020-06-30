import { JoinColumn, OneToOne } from 'typeorm';


import Company from '../Company';
import {RankHelper} from './RankHelper';

export abstract class FaveAvoidCompany extends RankHelper {
  @OneToOne(type => Company)
  @JoinColumn()
  company: Company;
}
