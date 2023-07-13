import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  searchValue: string = '';
  isSorted: boolean = false;
  counter: number = 0;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers();
  }

  onInput(event: any) {
    this.searchValue = event.target.value;
    this.usersService.searchUsers(this.searchValue, ["name", "email", "phone"]);
  }

  onSortClick() {
    this.isSorted = true;
    this.counter = this.counter +1;
    if (this.counter % 2) {
      this.usersService.sortUsersAZ();
    }
else {
  this.usersService.sortUsersZA();
}
    
  }
}
