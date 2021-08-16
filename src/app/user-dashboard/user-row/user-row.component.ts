import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})

export class UserRowComponent {
  @Input() user: User;
  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();

  showEdit() {
    this.editUser.emit({event: event, id: this.user.id});
  }

  deleteSelectedUser() {
    this.deleteUser.emit({event: event, id: this.user.id});
  }
}
