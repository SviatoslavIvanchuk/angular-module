import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPost} from "../../../interfaces";
import {PostDataService} from "../post-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {

  constructor(private postDataService: PostDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    const {id} = route.params;
    return this.postDataService.getById(id);
  }
}
