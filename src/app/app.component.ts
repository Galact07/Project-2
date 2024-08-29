// import { Component } from '@angular/core';
// import { LoginComponent } from './login/login.component';
// import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, LoginComponent, HttpClient],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent {
//   name = 'Roshan';
//   title = 'Insurance CRUD Application';
// }
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; // Add this line
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
// import id from '@angular/common/locales/id';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,LoginComponent,FormsModule,InsurancePolicyComponent,NgbModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

