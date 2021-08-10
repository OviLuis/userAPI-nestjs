import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from  '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable} from 'rxjs';
import { USERS } from './user.mocks';
import { User } from './user.interface';
import { UserDto, Address, Company} from './user.dto';

@Injectable()
export class UserService {
	constructor(private httpService: HttpService){}
	private users = USERS;
	private base_url = 'https://jsonplaceholder.typicode.com/users';

	private entityToDTO(user:any): UserDto{
		
		const companyDto = new Company();
		companyDto.name = user.company.name;
		companyDto.catch_phrase = user.company.catchPhrase;
		companyDto.bs = user.company.bs;

		const addressDto = new Address();
		addressDto.street = user.address.street;
		addressDto.suite = user.address.suite;
		addressDto.city = user.address.city;
		addressDto.zip_code = user.address.zipcode;
		const geo = user.address.geo;
		addressDto.geolocation = {'lat': geo.lat, 'lng': geo.lng};

		const userDto = new UserDto();
		userDto.id = user.id;
		userDto.name = user.name;
		userDto.username = user.username;
		userDto.email = user.email;
		userDto.phone = user.phone;
		userDto.website = user.website;
		userDto.address = addressDto;
		userDto.company = companyDto;

		return userDto;
	}

	public async getUsers() {	
	    const res = await this.httpService.get(this.base_url).toPromise();
		const datos = res.data;
		const usersDto: UserDto[] = datos.map( i => this.entityToDTO(i));

	    return usersDto;
	}

	public async getUserById(id: number){

	  	const res = await this.httpService.get(`${this.base_url}/${id}`).toPromise();

	  	if(!res){
			throw new NotFoundException(`User whit the id ${id} was not found`);
		}

		const datos = res.data;

		const userDto: UserDto =  this.entityToDTO(datos);

	    return userDto;
	}

	public async getByFilter(name: string){
		const users = await this.getUsers();
		const users_ = users.filter(user =>  {
			console.log(user.name);
			user.name === name;
		});

		return users_;
	}
}
