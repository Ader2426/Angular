import { Injectable } from '@angular/core';


export interface List {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }
  getAllList (): List[] {
    return [
      {
        title: 'Aaron Sorkin',
        description: 'Lopi Lopa Lopv'
      },
      {
        title:'Pier Paolo Duras',
        description:'lorem bananeipsum'
      },
      {
        title:'Elia Kazan',
        description: 'Cadance'
      }
    ]
  }
}
