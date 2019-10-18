import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  viewCustomerId: number;
  constructor() {}

  setViewCustomerId(id) {
    this.viewCustomerId = id;
  }

  getViewCustomerId() {
    return this.viewCustomerId;
  }
}