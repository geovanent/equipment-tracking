import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  status: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  location?: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  checkoutTime?: Date;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  jobId?: string;
}
