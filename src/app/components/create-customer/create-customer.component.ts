import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GetAllCustomersService } from "./../../services/get-all-customers.service";
import { SharedService } from "./../../services/shared.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.css"]
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private sharedService: SharedService
  ) {
    sharedService.setViewCustomerId(0);
    this.createCustomerForm = formBuilder.group({
      id: [0],
      name: ["", Validators.required],
      phone: [""],
      email: ["", Validators.email],
      age : ["", [Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]*')]],
      address: []
    });
  }

  ngOnInit() {}

  createCustomer() {
    console.log("create button clicked");
    console.log("form value " + JSON.stringify(this.createCustomerForm.value));

    if (this.createCustomerForm.valid) {
      this.toastr.successToastr("This is a vaild form.", "Success!");
    } else {
      this.toastr.warningToastr("This is not a valid form.", "Alert!");
    }
  }
}
