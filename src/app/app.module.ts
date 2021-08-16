import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddUserFormComponent } from './user-dashboard/add-user-form/add-user-form.component';
import { UpdateUserFormComponent } from './user-dashboard/update-user-form/update-user-form.component';
import { UserRowComponent } from './user-dashboard/user-row/user-row.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AddUserFormComponent,
    UpdateUserFormComponent,
    UserRowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
