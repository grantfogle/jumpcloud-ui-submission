import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRowComponent } from './user-dashboard/user-row/user-row.component';
import { AddUserFormComponent } from './user-dashboard/add-user-form/add-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserRowComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
