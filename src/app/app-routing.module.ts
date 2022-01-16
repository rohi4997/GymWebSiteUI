import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from './Routing/gallery/gallery.component';
import {FranchiseComponent} from './Routing/franchise/franchise.component';
import { HomeComponent } from './Routing/home/home.component';
import { ContactMeComponent } from './MyComponents/contact-me/contact-me.component';
import { BlogComponent } from './Routing/blog/blog.component';
import { GymfacilitiesComponent } from './Routing/gymfacilities/gymfacilities.component';
import { GymfeeComponent } from './Routing/gymfee/gymfee.component';
import { PersonaltrainingComponent } from './Routing/personaltraining/personaltraining.component';
import { SupplimentsComponent } from './Routing/suppliments/suppliments.component';
import { SportswearComponent } from './Routing/sportswear/sportswear.component';
import { DietplanComponent } from './Routing/dietplan/dietplan.component';
import { GymequipmentsComponent } from './Routing/gymequipments/gymequipments.component';
import { FeedbackComponent } from './Routing/feedback/feedback.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { ContactComponent } from './Routing/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'gymfacilities',
    component:GymfacilitiesComponent
  },
  {
    path:'gymfee',
    component:GymfeeComponent
  },
  {
    path:'personaltraining',
    component:PersonaltrainingComponent
  },
  {
    path:'suppliments',
    component:SupplimentsComponent
  },
  {
    path:'sportswear',
    component:SportswearComponent
  },
  {
    path:'dietplan',
    component:DietplanComponent
  },
  {
    path:'gymequipments',
    component:GymequipmentsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'feedbacks',
    component:FeedbackComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
