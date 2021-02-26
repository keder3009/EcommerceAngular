import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { ShopComponent } from './modules/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./modules/inicio/inicio.component";
import { LoginComponent } from "./modules/login/login.component";
import { SeccionesComponent } from "./modules/secciones/secciones.component";
import { AdminComponent } from "./modules/admin/admin.component";

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'secciones',
    component: SeccionesComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
