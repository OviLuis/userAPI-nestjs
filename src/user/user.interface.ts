export interface Address{
	street: string;
	suite: string;
	city: string;
	zip_code: string;
	geolocation: object;
}

export interface Company{
	name: string;
	catch_phrase: string;
	bs: string;
}

export interface User{
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}