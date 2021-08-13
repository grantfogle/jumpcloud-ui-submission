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
    // this.newUser = {
    //   username: '',
    //   email: ''
    // }
  }

  submitNewUser() {
    console.log(this.newUserForm);
    console.log('bam', this.username, this.email);
    const newUser = {
      email: this.email,
      username: this.username,
      firstname: 'grant',
      lastname: 'grant',
    }
    // if (this.newUserForm.valid) {
      this.userService.createUser(newUser);
    // }
  }

  cancelFormSubmit() {
    this.email = '';
    this.username= '';
    this.displayForm = false;
  }
    // emit event
    // call service
    // clear user data
    // pass to parent component so we have a new user added without having to make call to db
}
