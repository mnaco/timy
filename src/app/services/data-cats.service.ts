import { Injectable } from '@angular/core';
import { Cat } from '../classes/cat';

@Injectable()
export class DataCatsService {

  cats: Cat[] = [
    { id: 0, name: "Inbox" },
    { id: 1, name: "Business" },
    { id: 2, name: "Private" },
    { id: 3, name: "Pespectives" },
    { id: 4, name: "Ideas" },
    { id: 5, name: "Archive" },
  ];

  constructor() { }

  getCats() {
    return this.cats;
  }

  getCat(id:number):Cat {
    return this.cats.filter((item) => item.id === id)[0];
  }


}