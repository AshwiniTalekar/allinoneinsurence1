import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgstudentComponent } from './ugstudent/ugstudent.component';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgcoursesComponent } from './ugcourses/ugcourses.component';
import { UgadmissionComponent } from './ugadmission/ugadmission.component';



@NgModule({
  declarations: [
    UgstudentComponent,
    UgstaffComponent,
    UgcoursesComponent,
    UgadmissionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UgModule { }
