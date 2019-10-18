import { Injectable } from '@angular/core';
import { Customer } from "src/app/model/customer";
import { customerList } from "./../data/data";
@Injectable()
export class GetACustomerService {

  customer: Customer;
  customerList: Customer[] = customerList;
  constructor() { }

  getCustomerByGivenId(id) {
    this.customer = this.customerList.find(cus => cus._id === id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customer);
      }, 2000);
    });
  }

}