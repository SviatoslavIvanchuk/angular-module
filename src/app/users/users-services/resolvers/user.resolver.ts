import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IUser} from "../../../interfaces";
import {UserDataService} from "../user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {

  constructor(private userDataService: UserDataService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    let stateElement = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

    if (stateElement) {
      return stateElement
    }

    const {id} = route.params;
    return this.userDataService.getById(id);
  }
}
