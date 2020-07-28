import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Profile/profile.component';

const routes: Routes = [
  {path : '',pathMatch:'full',  component : ProfileComponent },

  {path : '**', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
