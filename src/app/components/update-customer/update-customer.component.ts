import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";

import { GetACustomerService } from "./../../services/get-acustomer.service";
import { SharedService } from "./../../services/shared.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm: FormGroup;
  customer: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrManager,
    private getACustomerService: GetACustomerService,
    private sharedService: SharedService
  ) {
    this.updateCustomerForm = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      phone: [""],
      email: ["", Validators.email],
      age : [],
      address: []
    });
  }

  ngOnInit() {
    const promise = this.getACustomerService.getCustomerByGivenId(
      this.sharedService.getViewCustomerId()
    );
    promise.then(
      response => {
        this.updateCustomerForm.controls["id"].setValue(response["id"]);
        this.updateCustomerForm.controls["name"].setValue(response["name"]);
        this.updateCustomerForm.controls["phone"].setValue(
          response["phone"]
        );
        this.updateCustomerForm.controls["email"].setValue(response["email"]);
        this.updateCustomerForm.controls["age"].setValue(response["age"]);
        this.updateCustomerForm.controls["address"].setValue(response["address"]);
      },
      error => {
        console.log("error " + error);
      }
    );
  }

  updateCustomer() {
    console.log(
      "update Customer " + JSON.stringify(this.updateCustomerForm.value)
    );
  }

}