import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable} from 'rxjs';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService) {}

	@Get()
	async listAll() {
		const res = await this.userService.getUsers();
	    return res;
	}

	@Get(':id')
    async getUser(@Param('id') id: number){
	  	return this.userService.getUserById(id); 
	}

	@Get('findByFilter')
	async getUserByFilter(@Query() query){
		console.log('params')
		console.log(query)
		return 'OK';
	}
}
