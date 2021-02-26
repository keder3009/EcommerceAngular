import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from "ng-sidebar";
import { ShopComponent } from './modules/shop/shop.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';

//firebase
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule, } from "@angular/fire";

import { environment } from "../environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/firestore";
import { SeccionesComponent } from './modules/secciones/secciones.component';
import { AdminComponent } from './modules/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SeccionesComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    FormsModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

  ],
  providers: [
    //firebase
    AngularFireAuth,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
