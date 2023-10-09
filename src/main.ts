import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import 'reflect-metadata';
import config from './config/global.config';

const globalConfig = config();

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Equipment Tracking API')
    .setDescription('API for tracking equipment')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(globalConfig.port);
  logger.log(`Application listening on port ${globalConfig.port}`);
}
bootstrap();
