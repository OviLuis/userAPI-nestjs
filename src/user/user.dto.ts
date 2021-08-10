export class Address{
	street: string;
	suite: string;
	city: string;
	zip_code: string;
	geolocation: object;
}

export class Company{
	name: string;
	catch_phrase: string;
	bs: string;
}

export class UserDto{
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}