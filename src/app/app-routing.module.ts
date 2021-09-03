import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
const routes: Routes = [{path:'formcontrol', component:FormcontrolComponent},
{path:'formbuilder',component:FormbuilderComponent},{path:'', component:FormcontrolComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
