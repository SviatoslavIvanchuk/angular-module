import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { IUserDetails } from "../../interfaces/userDetails.interface";
import { UserService } from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const stateElement = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUserDetails;

      if (stateElement) {
        this.userDetails = stateElement;
      } else {
        this.userService.getById(id).subscribe(value => this.userDetails = value)
      }

    } );
  }

}
