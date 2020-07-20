import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Profile/profile.component';
import { AboutComponent } from './About/about.component';
import { WelcomeComponent } from './WelcomePage/welcome.component';


const routes: Routes = [
  {path : '',pathMatch:'full', component : ProfileComponent },
  {path : 'about', component : AboutComponent},
  {path : 'welcome', component : WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
