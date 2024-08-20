import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//controller 는 url을 위한것!

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello")
  sayHello(): string{
    return this.appService.getHi();
  }
    
}
