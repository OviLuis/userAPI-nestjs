import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): string {
  	let users = [1,2,3,4]
    return 'Listado de todos los usuarios';
  }

  getUserById(id): string{
  	return 'Retorna el detalle de un usuario';
  }
}
