import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Header1Component } from './header1/header1.component';
import { LoginformComponent } from './login/loginform/loginform.component';
import { RegisterformComponent } from './register/registerform/registerform.component';
import { PurohitComponent } from './purohit/purohit.component';
import { PorohiRegisterFormComponent } from './purohit/porohi-register-form/porohi-register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { MyOrdersComponent } from './profile/my-orders/my-orders.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Footer1Component } from './footer1/footer1.component';
import { ImageComponent } from './contact-us/image/image.component';
import { LocationComponent } from './contact-us/location/location.component';
import { GetInTouchComponent } from './contact-us/get-in-touch/get-in-touch.component';
import { ContactoptionComponent } from './contact-us/contactoption/contactoption.component';
import { PunyakshetramCategoriesComponent } from './punyakshetram-categories/punyakshetram-categories.component';
import { AllPunyakshetramCategoriesComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-categories.component';
import { AllPunyakshetramCategoryItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-items.component';
import { AllPunyakshetramCategoryItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-item/all-punyakshetram-category-item.component';
import { RiverItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-items.component';
import { RiverItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-item/river-item.component';
import { ShaktipeetamsItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetams-items.component';
import { ShaktipeetamItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetam-item/shaktipeetam-item.component';
import{PoojadetailsComponent} from './poojadetails/poojadetails.component';
import{PunyakshetramdetailsComponent} from './punyakshetramdetails/punyakshetramdetails.component';


import { SliderComponent } from './home/slider/slider.component';
import { PoojasComponent } from './home/poojas/poojas.component';
import { PoojasdescriptionComponent } from './home/poojas/poojasdescription/poojasdescription.component';
import { PoojasiteamsComponent } from './home/poojas/poojasiteams/poojasiteams.component';
import { PoojasiteamComponent } from './home/poojas/poojasiteams/poojasiteam/poojasiteam.component';
import { PunyakeshtramsComponent } from './home/punyakeshtrams/punyakeshtrams.component';
import { PunyakeshtramdescriptionComponent } from './home/punyakeshtrams/punyakeshtramdescription/punyakeshtramdescription.component';
import { PunyakeshtramiteamsComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteams.component';
import { PunyakeshtramiteamComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteam/punyakeshtramiteam.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CustompipePipe } from './custompipe.pipe';


const approot: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'purohith',component:PorohiRegisterFormComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'orders',component:MyOrdersComponent},
  {path:'updateprofile',component:UpdateProfileComponent},
  {path:'allpunyakshetrams',component:AllPunyakshetramCategoryItemsComponent},
  {path:'riverpunyakshetrams',component:RiverItemsComponent},
  {path:'shaktipeetams',component:ShaktipeetamsItemsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:"poojadetails/:poojaid",component:PoojadetailsComponent},
  {path:"punyakeshtramdetails",component:PunyakshetramdetailsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    Header1Component,
    LoginformComponent,
    RegisterformComponent,
    PurohitComponent,
    PorohiRegisterFormComponent,
    ProfileComponent,
    UpdateProfileComponent,
    MyOrdersComponent,
    ChangePasswordComponent,
    ContactUsComponent,
    Footer1Component,
    ImageComponent,
    SliderComponent,
    LocationComponent,
    GetInTouchComponent,
    ContactoptionComponent,
    PunyakshetramCategoriesComponent,
    AllPunyakshetramCategoriesComponent,
    AllPunyakshetramCategoryItemsComponent,
    AllPunyakshetramCategoryItemComponent,
    RiverItemsComponent,
    RiverItemComponent,
    ShaktipeetamsItemsComponent,
    ShaktipeetamItemComponent,
    PoojadetailsComponent,
    PunyakshetramdetailsComponent,
    PoojasComponent,
    PoojasdescriptionComponent,
    PoojasiteamsComponent,
    PoojasiteamComponent,
    PunyakeshtramsComponent,
    PunyakeshtramdescriptionComponent,
    PunyakeshtramiteamComponent,
    PunyakeshtramiteamsComponent,
    HomeComponent,
    CustompipePipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approot, {useHash:true})
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
