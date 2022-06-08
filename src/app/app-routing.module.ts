import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '././home/home.component';
import { CuentaComponent } from '././cuenta/cuenta.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SituacionActualComponent } from './situacion-actual/situacion-actual.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'consejos', component: ConsejosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'situacion-actual', component: SituacionActualComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'login',component:LoginComponent},
  { path: 'forms',component:FormsModule},
  {path:'registro',component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
