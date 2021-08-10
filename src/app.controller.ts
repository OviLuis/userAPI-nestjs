import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listAll(): string {
    return this.appService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): string{
  	return this.appService.getUserById(id); 
  }

}
