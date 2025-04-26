import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home/home.component";
import { HospitalComponent } from './components/hospital/hospital.component';
import { SpicializeComponent } from "./components/spicialize/spicialize.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { WhyegyptComponent } from "./components/whyEygpt/whyegypt/whyegypt.component";
import { LocationComponent } from "./components/location/location/location.component";
import { HostingComponent } from "./components/hosting/hosting.component";
import { HowWeAreComponent } from "./components/how-we-are/how-we-are.component";
import { FormComponent } from "./components/form/form.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, HospitalComponent, SpicializeComponent, DoctorsComponent, WhyegyptComponent, LocationComponent, HostingComponent, HowWeAreComponent, FormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA ] 
})
export class AppComponent {


  }

