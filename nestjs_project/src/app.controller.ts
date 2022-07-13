import { Controller, Get, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { RolesGuard } from './Guards/test.guard';
import { TestException } from './exceptions/test.exception';
import { TestInterceptor } from './Interceptors/test.Interceptor';

@UseGuards(RolesGuard)
//@UseFilters(TestException)
@UseInterceptors(TestInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get('err')
  // geterror(){
  //   throw new TestException();
  // }
}
