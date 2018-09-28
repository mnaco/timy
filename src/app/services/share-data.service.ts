import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ShareDataService {
  private activeCat = new BehaviorSubject(0);
  castActiveCat = this.activeCat.asObservable(); 
 
  constructor() { }

  updateActiveCat(newCat) {
    this.activeCat.next(newCat);
  }

}