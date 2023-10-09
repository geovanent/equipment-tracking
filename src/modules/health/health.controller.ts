import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck } from '@nestjs/terminus';

@ApiTags('Health Check')
@Controller('health')
export class HealthController {
  @Get()
  @HealthCheck()
  check(): any {
    return this.staticResult();
  }

  staticResult(): any {
    return {
      status: 'ok',
      info: {
        'check health': {
          status: 'up',
        },
      },
      error: {},
      details: {
        'check health': {
          status: 'up',
        },
      },
    };
  }
}
