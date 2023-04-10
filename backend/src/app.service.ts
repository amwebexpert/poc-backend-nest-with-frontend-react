import { Injectable } from '@nestjs/common';
import { Echo } from './model';

@Injectable()
export class AppService {
  echo(): Echo {
    return {
      message: 'NestJS backend server',
      timestamp: new Date(),
    };
  }
}
