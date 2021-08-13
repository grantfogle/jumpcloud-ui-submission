import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddNewUser } from '../../services/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  displayForm = true;
  newUser: {
    
  };
  @ViewChild('newUserForm') newUserForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  toggleAddUserForm() {
    this.displayForm = !this.displayForm;
  }

  submitNewUser() {
    // emit event
    // call service
    // clear user data
    // pass to parent component so we have a new user added without having to make call to db
  }
}
