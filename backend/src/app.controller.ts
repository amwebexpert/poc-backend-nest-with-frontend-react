import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Echo } from './model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  echo(): Echo {
    return this.appService.echo();
  }
}
