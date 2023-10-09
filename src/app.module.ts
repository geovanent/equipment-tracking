import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentModule } from './equipment/equipment.module';
import { Equipment } from './equipment/equipment.entity';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './config/global.config'
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Equipment]),
    EquipmentModule,
  ],
})
export class AppModule {}