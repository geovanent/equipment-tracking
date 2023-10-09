import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('Health Controller', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a status object', () => {
    expect(controller.check()).toEqual({
      details: { 'check health': { status: 'up' } },
      error: {},
      info: { 'check health': { status: 'up' } },
      status: 'ok',
    });
  });
});
