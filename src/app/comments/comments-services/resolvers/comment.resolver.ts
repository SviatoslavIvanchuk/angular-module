import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IComment, IUser} from "../../../interfaces";
import {CommentsDataService} from "../comments-data.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {

  constructor(private commentsDataService: CommentsDataService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    let stateElement = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;

    if (stateElement) {
      return stateElement
    }

    const {id} = route.params;
    return this.commentsDataService.getById(id);
  }
}
