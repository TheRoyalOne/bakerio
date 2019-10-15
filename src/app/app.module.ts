import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService} from './components/general/login/login.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialCompletoComponent } from './components/admin/historial-completo/historial-completo.component';
import { FAQComponent } from './components/admin/faq/faq.component';
import { NotasComponent } from './components/admin/notas/notas.component';
import { AyudaComponent } from './components/admin/ayuda/ayuda.component';
import { PlantillasComponent } from './components/admin/plantillas/plantillas.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { RecetarioProduccionComponent } from './components/Produccion/recetario-produccion/recetario-produccion.component';
import { RecetarioEypComponent } from './components/Empaquetados-preparados/recetario-eyp/recetario-eyp.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqGComponent } from './components/general/faq-g/faq-g.component';
import { NotasGComponent } from './components/general/notas-g/notas-g.component';
import { UsuarioComponent } from './components/general/usuario/usuario.component';
import { RegistroComponent } from './components/general/registro/registro.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/general/login/login.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotaService } from './components/general/notas-g/nota.service';

@NgModule({
  declarations: [
    AppComponent,
    HistorialCompletoComponent,
    FAQComponent,
    NotasComponent,
    AyudaComponent,
    PlantillasComponent,
    UsuariosComponent,
    RecetarioProduccionComponent,
    RecetarioEypComponent,
    HomeComponent,
    NavbarComponent,
    FaqGComponent,
    NotasGComponent,
    UsuarioComponent,
    RegistroComponent,
    Page404Component,
    LoginComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [UserService, LoginService, NotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
