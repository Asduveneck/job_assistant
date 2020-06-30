import { Column, } from 'typeorm';
import { DetailColumn } from '../../types';


export abstract class Details {
  @Column({ type: 'json', nullable: true })
  detail: DetailColumn;
}