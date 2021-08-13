import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  constructor(private userService: UserService) { }
  // users: Observable<T>;
  userList: [];
  showEdit = false;

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.userList = response.results;
      console.log(response);
    });
  }

  deleteSelectedUser(id) {
    this.userService.deleteUser(id);
  }
}
