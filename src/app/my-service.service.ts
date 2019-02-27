import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }
  showTodayDate() {
    let date = new Date();
    return date;
  }
}
