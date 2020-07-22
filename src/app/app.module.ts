import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './Profile/profile.component';
import { AboutComponent } from './About/about.component';
import { WelcomeComponent } from './WelcomePage/welcome.component';
import { EducationComponent } from './Education/education.component';
import { ExperienceComponent } from './Experience/experience.component';
import { ContactComponent } from './Contact/contact.component';
import { ProjectsComponent } from './Projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    WelcomeComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
