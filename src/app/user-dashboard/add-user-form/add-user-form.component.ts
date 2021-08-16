import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
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
  lastname = '';
  username = '';
  email = '';
  @Output() addUserToUserList = new EventEmitter();
  @ViewChild('newUserForm') newUserForm: NgForm;

  constructor(private userService: UserService) { }

  toggleAddUserForm() {
    this.displayForm = !this.displayForm;
  }

  resetForm() {
    this.firstname = '';
    this.lastname = '';
    this.username = '';
    this.email = '';
  }

  submitNewUser() {
    if (this.firstname && this.lastname && this.username && this.email) {
      const newUser = {
        email: this.email,
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
      }
        this.userService.createUser(newUser).subscribe(response => {
          if (response) {
            const returnedUser = {
              id: response['id'],
              firstname: response['firstname'],
              lastname: response['lastname'],
              username: response['username'],
              email: response['email']
            }
            this.resetForm();
            this.displayForm = false;
            this.addUserToUserList.emit({event: event, user: returnedUser});
          }
        });
    }
  }

  cancelFormSubmit() {
    this.resetForm();
    this.displayForm = false;
  }
}
