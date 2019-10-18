import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { SharedService } from "./../services/shared.service";

@Injectable({
  providedIn: "root"
})
export class ViewCustomerRouteGuardService {
  constructor(private sharedService: SharedService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.sharedService.getViewCustomerId()) {
      return true;
    } else {
      return false;
    }
  }
}
