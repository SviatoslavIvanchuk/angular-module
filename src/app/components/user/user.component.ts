import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../models/user.interface";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  // @Output()
  // userEmitter = new EventEmitter<IUser>();
  // details: string;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // emmit(): void {
  //   this.userEmitter.emit(this.user);
  //
  //   this.details = 'some details about user'
  // }


  saveToStorage() {
    this.dataService.storage.next(this.user);
  }
}
