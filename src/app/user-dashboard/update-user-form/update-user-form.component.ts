import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.scss']
})
export class UpdateUserFormComponent {
  @ViewChild('updateUserForm') updateUserForm: NgForm;
  @Input() user: User;
  @Output() closeUpdateUserForm = new EventEmitter();

  constructor(private userService: UserService) {
  }

  updateUser() {
    if (this.user.lastname && this.user.firstname && this.user.username && this.user.email) {
      this.userService.updateUser(this.user.id, this.user).subscribe(response => {
        if (response) {
          this.closeUpdateUserForm.emit();   
        }
      });
    }
  }

  cancelFormSubmit() {
    this.closeUpdateUserForm.emit();
  }

}
