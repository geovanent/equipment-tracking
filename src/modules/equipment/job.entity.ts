import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  jobId: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
