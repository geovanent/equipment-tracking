import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from './equipment.entity';
import { CreateEquipmentDto } from './create-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  findAll(): Promise<Equipment[]> {
    return this.equipmentRepository.find();
  }

  async checkOutEquipment(id: number, jobId: string): Promise<Equipment> {
    const equipment = await this.equipmentRepository.findOne({ where: { id } });
    
    if (equipment.status === 'checked out') {
      throw new BadRequestException('Equipment is already checked out');
    }

    equipment.status = 'checked out';
    equipment.jobId = jobId;
    equipment.checkoutTime = new Date();

    return this.equipmentRepository.save(equipment);
  }

  async returnEquipment(id: number, location: string): Promise<Equipment> {
    const equipment = await this.equipmentRepository.findOne({ where: { id } });
    
    if (equipment.status !== 'checked out') {
      throw new BadRequestException('Equipment is not checked out');
    }

    equipment.status = 'available';
    equipment.location = location;
    equipment.jobId = null;
    equipment.checkoutTime = null;

    return this.equipmentRepository.save(equipment);
  }

}
