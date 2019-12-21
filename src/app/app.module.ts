import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MainComponent } from './main/main.component';

import { TransporterRegisterComponent } from './transporter-register/transporter-register.component';
import { RouterModule , Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'register/transporter', component: TransporterRegisterComponent},
  {path: 'find/transporter/:id', component: TransporterRegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCardComponent,
    MainComponent,
    TransporterRegisterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
