import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Equipment } from './equipment.entity';
import { Job } from './job.entity';

@Entity()
export class EquipmentCheckout {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipment)
  @JoinColumn()
  equipment: Equipment;

  @ManyToOne(() => Job, { nullable: true })
  @JoinColumn()
  job: Job;

  @Column({ type: 'timestamp' })
  checkoutDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  returnDate: Date;

  @Column({ length: 255, nullable: true })
  returnLocation: string;
}
