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
  // getUserObs: Observable<T>;
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

}
