import { Generated } from 'typeorm';

export abstract class RankHelper {
  @Generated('increment')
  rank: number;
}