import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Equipment } from 'src/modules/equipment/equipment.entity';
import 'dotenv/config';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST as string,
  port: 5432,
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_DATABASE as string,
  entities: [Equipment],
  synchronize: true,
};

export default databaseConfig;
