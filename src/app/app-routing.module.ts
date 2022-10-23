import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Staff/:id/:name', component:StaffComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Student',component:StudentComponent},
  {path:'parent',component:ParentComponent},
  
{
  path:'ug',loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UgModule)
},
{
path:'pg',loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PgModule)
},
  // {path:'**',component:ErrorComponent},
  // {path:'**',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }