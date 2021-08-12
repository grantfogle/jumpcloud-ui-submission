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
  users: Observable<T>;

  ngOnInit() {
    this.users = this.userService.getAllUsers().subscribe(users => {
      console.log(users);
    });
  }

}
