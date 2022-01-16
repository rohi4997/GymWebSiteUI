import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { IntroComponent } from './MyComponents/intro/intro.component';
import { AboutmeComponent } from './MyComponents/aboutme/aboutme.component';
import { ContactMeComponent } from './MyComponents/contact-me/contact-me.component';
import { SideBarComponent } from './MyComponents/side-bar/side-bar.component';
import { LoadingScreenComponent } from './MyComponents/loading-screen/loading-screen.component';
import { AchievementsComponent } from './MyComponents/achievements/achievements.component';
import { MembersCornerComponent } from './MyComponents/members-corner/members-corner.component';
import { CarouselComponent } from './MyComponents/carousel/carousel.component';
import { VideoComponent } from './MyComponents/video/video.component';
import { GalleryComponent } from './Routing/gallery/gallery.component';
import { FranchiseComponent } from './Routing/franchise/franchise.component';
import { HomeComponent } from './Routing/home/home.component';
import { BlogComponent } from './Routing/blog/blog.component';
import { GymfacilitiesComponent } from './Routing/gymfacilities/gymfacilities.component';
import { GymfeeComponent } from './Routing/gymfee/gymfee.component';
import { PersonaltrainingComponent } from './Routing/personaltraining/personaltraining.component';
import { SupplimentsComponent } from './Routing/suppliments/suppliments.component';
import { SportswearComponent } from './Routing/sportswear/sportswear.component';
import { DietplanComponent } from './Routing/dietplan/dietplan.component';
import { GymequipmentsComponent } from './Routing/gymequipments/gymequipments.component';
import { FeedbackComponent } from './Routing/feedback/feedback.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { ContactComponent } from './Routing/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    AboutmeComponent,
    ContactMeComponent,
    LoadingScreenComponent,
    MembersCornerComponent,
    CarouselComponent,
    VideoComponent,
    GalleryComponent,
    FranchiseComponent,
    HomeComponent,
    BlogComponent,
    GymfacilitiesComponent,
    GymfeeComponent,
    PersonaltrainingComponent,
    SupplimentsComponent,
    SportswearComponent,
    DietplanComponent,
    GymequipmentsComponent,
    FeedbackComponent,
    ProjectsComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
