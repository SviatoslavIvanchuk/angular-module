import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../../interfaces";
import {UserDataService} from "../../users-services/user-data.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;
  constructor(private activatedRoute: ActivatedRoute, private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data})=> this.user = data);
  }

}
