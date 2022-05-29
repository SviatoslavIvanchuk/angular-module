import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IUser } from "../interfaces";
import { urls } from "../constants";
import {IUserDetails} from "../interfaces/userDetails.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(urls.users);
  }

  getById(id: string): Observable<IUserDetails> {
    return this.httpClient
      .get<IUserDetails>(`${urls.users}/${id}`)
  }
}
