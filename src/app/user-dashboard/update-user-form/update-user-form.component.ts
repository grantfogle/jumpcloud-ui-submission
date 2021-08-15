import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.scss']
})
export class UpdateUserFormComponent implements OnInit {
  @ViewChild('updateUserForm') updateUserForm: NgForm;
  @Input() user;
  @Output() closeUpdateUserForm = new EventEmitter();

  constructor(private userService: UserService) {
  }
  ngOnInit() {
  }

  updateUser() {
    // if (this.updateUserForm.valid) {
      // handle error
      const submitUpdatedUser = this.userService.updateUser(this.user.id, this.user).subscribe(response => {
        console.log(response);     
        if (response) {
          this.closeUpdateUserForm.emit();   
        }
      });
      console.log(submitUpdatedUser);
      // this.closeUpdateUserForm.emit();
    // }
  }

}
