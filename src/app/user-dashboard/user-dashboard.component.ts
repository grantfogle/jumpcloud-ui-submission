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
  selectedUserId = '';

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.userList = response.results;
      console.log(response);
    });
  }

  deleteSelectedUser(id) {
    this.userService.deleteUser(id);
  }

  toggleShowEdit(id) {
    this.showEdit = !this.showEdit;
    if (this.showEdit) {
      this.selectedUserId = id;
    } else {
      this.selectedUserId = '';
    }
  }

  submitUpdateUserInfo(id) {
    console.log(id);
    const updatedUser = {
      id,
      // username,
      // firstname,
      // lastname
    }
    const userToUpdate = this.userList.filter(user => user["id"] === id);
    this.userService.updateUser(id, updatedUser)
    console.log(userToUpdate, this.userList);
  }

}
