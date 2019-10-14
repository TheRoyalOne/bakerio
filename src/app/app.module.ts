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
import { InventarioProduccionComponent } from './components/admin/inventario-produccion/inventario-produccion.component';
import { InventarioInsumosComponent } from './components/admin/inventario-insumos/inventario-insumos.component';
import { TareasDetallesComponent } from './components/admin/tareas-detalles/tareas-detalles.component';
import { AyudaComponent } from './components/admin/ayuda/ayuda.component';
import { PlantillasComponent } from './components/admin/plantillas/plantillas.component';
import { PedidosComponent } from './components/admin/pedidos/pedidos.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { EnviosComponent } from './components/admin/envios/envios.component';
import { PagoComponent } from './components/compra/pago/pago.component';
import { DetallesEnvioComponent } from './components/envio/detalles-envio/detalles-envio.component';
import { RutaComponent } from './components/envio/ruta/ruta.component';
import { ProcesoComponent } from './components/envio/proceso/proceso.component';
import { RecetarioComponent } from './components/admin/recetario/recetario.component';
import { RecetarioProduccionComponent } from './components/Produccion/recetario-produccion/recetario-produccion.component';
import { RecetarioEypComponent } from './components/Empaquetados-preparados/recetario-eyp/recetario-eyp.component';
import { InventarioProduccionVComponent } from './components/venta/inventario-produccion-v/inventario-produccion-v.component';
import { VentaVComponent } from './components/venta/venta-v/venta-v.component';
import { HistorialVentaComponent } from './components/venta/historial-venta/historial-venta.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqGComponent } from './components/general/faq-g/faq-g.component';
import { NotasGComponent } from './components/general/notas-g/notas-g.component';
import { UsuarioComponent } from './components/general/usuario/usuario.component';
import { RegistroComponent } from './components/general/registro/registro.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/general/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
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
    InventarioProduccionComponent,
    InventarioInsumosComponent,
    TareasDetallesComponent,
    AyudaComponent,
    PlantillasComponent,
    PedidosComponent,
    UsuariosComponent,
    EnviosComponent,
    PagoComponent,
    DetallesEnvioComponent,
    RutaComponent,
    ProcesoComponent,
    RecetarioComponent,
    RecetarioProduccionComponent,
    RecetarioEypComponent,
    InventarioProduccionVComponent,
    VentaVComponent,
    HistorialVentaComponent,
    HomeComponent,
    ModalComponent,
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
