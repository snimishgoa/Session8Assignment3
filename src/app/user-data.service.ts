import { Injectable } from '@angular/core';
import { User } from "app/user.model";

@Injectable()
export class UserDataService {
  private userList: User[] = new Array();

  constructor() { }

  addUser(name: string, salutation: string): void{
    let user = {salutation: salutation, name: name};
    this.userList.unshift(user);
  }

  getUserList(): User[]{
    return this.userList;
  }
}
