import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/customer";
import { Router } from "@angular/router";
import { GetAllCustomersService } from "./../../services/get-all-customers.service";
import { SharedService } from "./../../services/shared.service";
@Component({
  selector: "app-view-customers",
  templateUrl: "./view-customers.component.html",
  styleUrls: ["./view-customers.component.css"]
})
export class ViewCustomersComponent implements OnInit {
  customerList: Customer[] = [];
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private getAllCustomers: GetAllCustomersService
  ) {
    sharedService.setViewCustomerId(null);
  }

  ngOnInit() {
    const promise = this.getAllCustomers.getAllCustomers();
    promise.then(
      response => {
        this.customerList = response["res"];
      },
      error => {
        console.log("error " + error);
      }
    );
  }

  updateCustomer(customer) {
    console.log("update customer " + JSON.stringify(customer));
  }

  deleteCustomer(id) {
    console.log("delete customer " + id);
  }

  viewCustomer(id) {
    this.sharedService.setViewCustomerId(id);
    this.router.navigate(["/update"]);
  }
}
