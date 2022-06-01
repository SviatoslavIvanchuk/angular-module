import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  // @Output()
  // userEmitt = new EventEmitter<IUser>();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value);
  }

  // catchUserEmitt(userCatch: IUser): void {
  //   this.userEmitt.emit(userCatch)
  // }
}
