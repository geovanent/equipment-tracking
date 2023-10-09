import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.entity';

@ApiTags('equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get()
  @ApiOkResponse({ type: [Equipment] })
  findAll(): Promise<Equipment[]> {
    return this.equipmentService.findAll();
  }

  @Post(':id/checkout')
  @ApiOkResponse({ type: Equipment })
  @ApiBadRequestResponse({ description: 'Equipment is already checked out' })
  checkOut(
    @Param('id') id: number,
    @Body('jobId') jobId: string,
  ): Promise<Equipment> {
    return this.equipmentService.checkOutEquipment(id, jobId);
  }

  @Post(':id/return')
  @ApiOkResponse({ type: Equipment })
  @ApiBadRequestResponse({ description: 'Equipment is not checked out' })
  return(
    @Param('id') id: number,
    @Body('location') location: string,
  ): Promise<Equipment> {
    return this.equipmentService.returnEquipment(id, location);
  }
}