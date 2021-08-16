import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  constructor(private userService: UserService) { }
  userList: User[];
  showEdit = false;
  selectedUserId = '';

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.userList = response.results;
    });
  }

  deleteSelectedUser($event) {
    this.userService.deleteUser($event.id).subscribe(response => {
      if (response) {
        this.userList = this.userList.filter(user => user.id !== $event.id);
      }
    });
  }

  toggleShowEdit($event) {
    this.showEdit = !this.showEdit;
    if (this.showEdit) {
      this.selectedUserId = $event.id;
    } else {
      this.selectedUserId = '';
    }
  }

  addUser($event) {
    this.userList.push($event.user);
  }

}
