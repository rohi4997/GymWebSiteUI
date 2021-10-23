import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { BodyComponent } from './MyComponents/body/body.component';
import { IntroComponent } from './MyComponents/intro/intro.component';
import { AboutmeComponent } from './MyComponents/aboutme/aboutme.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { SkillsComponent } from './MyComponents/skills/skills.component';
import { ContactMeComponent } from './MyComponents/contact-me/contact-me.component';
import { SideBarComponent } from './MyComponents/side-bar/side-bar.component';
import { LoadingScreenComponent } from './MyComponents/loading-screen/loading-screen.component';
import { LoaderComponent } from './Mycomponents/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    IntroComponent,
    AboutmeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactMeComponent,
    SideBarComponent,
    LoadingScreenComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
