import { Injectable } from '@nestjs/common';
import { Echo } from './model';

@Injectable()
export class AppService {
  getHello(): Echo {
    return {
      message: 'Hello World!',
      timestamp: new Date(),
    };
  }
}
