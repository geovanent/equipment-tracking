import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { Equipment } from './modules/equipment/equipment.entity';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './config/global.config';
import databaseConfig from './config/database.config';
import { Job } from './modules/equipment/job.entity';
import { EquipmentCheckout } from './modules/equipment/equipment-checkout.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Equipment, Job, EquipmentCheckout]),
    EquipmentModule,
  ],
})
export class AppModule {}
