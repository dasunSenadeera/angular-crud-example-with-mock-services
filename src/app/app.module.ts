import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ToastrModule } from "ng6-toastr-notifications";
import { GetAllCustomersService } from './services/get-all-customers.service';
import { SharedService } from './services/shared.service';
import { GetACustomerService } from './services/get-acustomer.service';

@NgModule({
  imports:      [ AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ],
  declarations: [ AppComponent, HomeComponent, NavigationBarComponent, CreateCustomerComponent, UpdateCustomerComponent, ViewCustomersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GetAllCustomersService, SharedService, GetACustomerService]
})
export class AppModule { }
