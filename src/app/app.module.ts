import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SituacionActualComponent } from './situacion-actual/situacion-actual.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CuentaComponent,
    ConsejosComponent,
    NoticiasComponent,
    SituacionActualComponent,
    SobreNosotrosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
