import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  displayForm = false;
  firstname = '';
  lastname = ''
  username = '';
  email = '';
  @ViewChild('newUserForm') newUserForm: NgForm;

  constructor(private userService: UserService) { }


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
}
