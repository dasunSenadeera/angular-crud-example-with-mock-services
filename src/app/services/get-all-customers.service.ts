import { Injectable } from '@angular/core';
import { customerList } from "../data/data";
import { Customer } from "../model/Customer";

@Injectable()
export class GetAllCustomersService {

  customerList: Customer[] = customerList;
  constructor() { }

  getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.customerList };
        resolve(data);
      }, 2000);
    });
  }

}