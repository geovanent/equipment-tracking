import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.entity';
import { CreateEquipmentDto } from './create-equipment.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../user/user.entity';

@ApiTags('Equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get()
  @ApiOkResponse({ type: [Equipment] })
  findAll(): Promise<Equipment[]> {
    return this.equipmentService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Post(':id/checkout')
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: Equipment })
  @ApiBadRequestResponse({ description: 'Equipment is already checked out' })
  checkOut(
    @Param('id') id: number,
    @Body('jobId') jobId: string,
    @GetUser() user: User,
  ): Promise<Equipment> {
    console.log(user);
    return this.equipmentService.checkOutEquipment(id, jobId);
  }

  @Post(':id/return')
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: Equipment })
  @ApiBadRequestResponse({ description: 'Equipment is not checked out' })
  return(
    @Param('id') id: number,
    @Body('location') location: string,
    @GetUser() user: User,
  ): Promise<Equipment> {
    console.log(user);
    return this.equipmentService.returnEquipment(id, location);
  }
}
