import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgadmissionComponent } from './pgadmission/pgadmission.component';
import { PgcoursesComponent } from './pgcourses/pgcourses.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    StaffComponent,
    ContactUsComponent,
    StudentComponent,
    ErrorComponent,
    ParentComponent,
    ChildComponent,
    PgstaffComponent,
    PgadmissionComponent,
    PgcoursesComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
