import { Generated } from 'typeorm';

export default abstract class RankHelper {
  @Generated('increment')
  rank: number;
}
