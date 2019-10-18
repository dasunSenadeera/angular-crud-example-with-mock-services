import { ViewCustomersComponent } from "./components/view-customers/view-customers.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateCustomerComponent } from "./components/create-customer/create-customer.component";
import { UpdateCustomerComponent } from "./components/update-customer/update-customer.component";
import { HomeComponent } from "./components/home/home.component";
import { ViewCustomerRouteGuardService } from "./routeGuards/view-customer-route-guard";

const routes: Routes = [
  {
    path: "create",
    component: CreateCustomerComponent
  },
  {
    path: "update",
    component: UpdateCustomerComponent,
    canActivate: [ViewCustomerRouteGuardService]
  },
  {
    path: "view",
    component: ViewCustomersComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
