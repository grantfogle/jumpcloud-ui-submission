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
  userList: [];
  showEdit = false;
  selectedUserId = '';

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.userList = response.results;
    });
  }

  deleteSelectedUser(id) {
    this.userService.deleteUser(id).subscribe(response => {
      if (response) {
        // throwing error because i have not created a model for user list array
        this.userList = this.userList.filter(user => user.id !== id);
      }
    });
  }

  toggleShowEdit(id) {
    this.showEdit = !this.showEdit;
    if (this.showEdit) {
      this.selectedUserId = id;
    } else {
      this.selectedUserId = '';
    }
  }

  addUser($event) {
    console.log($event.user)
    this.userList.push($event.user);
  }

}
