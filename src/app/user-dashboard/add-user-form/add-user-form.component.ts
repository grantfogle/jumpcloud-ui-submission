import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  displayForm = false;
  firstname = '';
  lastname = ''
  username = '';
  email = '';
  
  @ViewChild('newUserForm') newUserForm: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  toggleAddUserForm() {
    this.displayForm = !this.displayForm;
  }

  resetForm() {
    this.firstname = '';
    this.lastname = ''
    this.username = '';
    this.email = '';
  }

  submitNewUser() {
    const newUser = {
      email: this.email,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
    }
      this.userService.createUser(newUser);
      this.resetForm();
  }

  cancelFormSubmit() {
    this.resetForm()
    this.displayForm = false;
  }
    // emit event
    // call service
    // clear user data
    // pass to parent component so we have a new user added without having to make call to db
}
