import { JoinColumn, OneToOne } from 'typeorm';

import Job from '../Job';
import {RankHelper} from './RankHelper';

export abstract class FaveAvoidJob extends RankHelper {
  @OneToOne(type => Job)
  @JoinColumn()
  job: Job;
}
