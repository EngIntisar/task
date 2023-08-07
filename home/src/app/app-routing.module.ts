import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepaComponent } from './homepa/homepa.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component:HomepaComponent},
{path:'student',component:StudentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
