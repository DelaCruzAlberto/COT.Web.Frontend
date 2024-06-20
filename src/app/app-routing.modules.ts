import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Route from './routes';


import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent, },

      // Consultas
      
      // Parametros
      
      // Ventas
      
      // Operacion Comercial
      
      // Vendedores 

      // Venta rapida
          ]
  },

  { path: '**', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }