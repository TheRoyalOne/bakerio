import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService} from './components/general/login/login.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialCompletoComponent } from './components/admin/historial-completo/historial-completo.component';
import { NotasComponent } from './components/admin/notas/notas.component';
import { AyudaComponent } from './components/admin/ayuda/ayuda.component';
import { PlantillasComponent } from './components/admin/plantillas/plantillas.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { NotasGComponent } from './components/general/notas-g/notas-g.component';
import { UsuarioComponent } from './components/general/usuario/usuario.component';
import { RegistroComponent } from './components/general/registro/registro.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/general/login/login.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotaService } from './components/general/notas-g/nota.service';
import { HistorialComponent } from './components/general/historial/historial.component';
import { NotificacionesComponent } from './components/general/notificaciones/notificaciones.component';
import { PlanLaboralComponent } from './components/u-v/plan-laboral/plan-laboral.component';
import { RecetasComponent } from './components/u_ad_pro_emp_pre/recetas/recetas.component';
import { RecetarioAComponent } from './components/u_ad_pro_emp_pre/recetario-a/recetario-a.component';
import { RecetasAComponent } from './components/u_ad_pro_emp_pre/recetas-a/recetas-a.component';
import { IngresosComponent } from './components/admin/ingresos/ingresos.component';
import { GastosComponent } from './components/admin/gastos/gastos.component';
import { PerdidasComponent } from './components/admin/perdidas/perdidas.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { GraficasComponent } from './components/admin/graficas/graficas.component';
import { GananciasComponent } from './components/admin/ganancias/ganancias.component';
import { PreElaboradosComponent } from './components/admin/inventario/pre-elaborados/pre-elaborados.component';
import { PedidosPendientesComponent } from './components/u_ad_ven_env_emp_pre/pedidos-pendientes/pedidos-pendientes.component';
import { RutaComponent } from './components/envio/ruta/ruta.component';
import { HistorialPersonalComponent } from './components/u_ad_ven/historial-personal/historial-personal.component';
import { ProduccionComponent } from './components/u_ad_ven/inventario/produccion/produccion.component';
import { InsumosComponent } from './components/u_ad_ven/inventario/insumos/insumos.component';
import { TemporadaComponent } from './components/u_ad_ven/inventario/temporada/temporada.component';
import { PrincipalComponent } from './components/externo/principal/principal.component';
import { ProductosComponent } from './components/externo/productos/productos.component';
import { CreacionCuentaMayoreoComponent } from './components/externo/creacion-cuenta-mayoreo/creacion-cuenta-mayoreo.component';
import { CreacionCuentaMenudeoComponent } from './components/externo/creacion-cuenta-menudeo/creacion-cuenta-menudeo.component';
import { CuentaComponent } from './components/externo/cuenta/cuenta.component';
import { ReciboComponent } from './components/externo/recibo/recibo.component';
import { HistorialApartadosComponent } from './components/externo/historial-apartados/historial-apartados.component';
import { HistorialComprasComponent } from './components/externo/historial-compras/historial-compras.component';
import { CajasComponent } from './components/ventas/cajas/cajas.component';
import { MermaComponent } from './components/u_prod_emp_ven/merma/merma.component';
import { PedidooComponent } from './components/externo/pedidoo/pedidoo.component';
import { SalesComponent } from './components/u_ad_ven/inventario/sales/sales.component';
import { EnviosComponent } from './components/envio/envios/envios.component';
import { CajaaComponent } from './components/u_ad_ven/cajaa/cajaa.component';
import { RecetarioComponent } from './components/u_ad_pro_emp_pre/recetario/recetario.component';
import { PedidossComponent } from './components/u_ad_ven/pedidoss/pedidoss.component';
import { RegistroaComponent } from './components/admin/registroa/registroa.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { UsuarioService } from './components/general/usuario/usuario.service';
import { UsuariosService } from './components/admin/usuarios/usuarios.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AiudaComponent } from './components/general/aiuda/aiuda.component';
import { AiudaService } from './components/general/aiuda/aiuda.service';
import { DataService } from './components/general/usuario/data.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SideComponent } from './side/side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullprodService } from './components/externo/principal/fullprod.service';
import { LogoutComponent } from './logout/logout.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RegisterService } from './components/general/registro/register.service';
import { RegisteraService } from './components/admin/registroa/registera.service';
import { RegistersComponent } from './components/admin/registers/registers.component';
import { RegistersService } from './components/admin/registers/registers.service';
import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';   // agm-direction AIzaSyCEcqcY8SlTqiJxGeVf1SjdcgEj4j0eCi0
import { map } from 'rxjs/operators';
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './side/my-dialog/my-dialog.component';
import { ComentarioComponent } from './components/externo/principal/comentario/comentario.component';
import { CompraComponent } from './components/externo/principal/compra/compra.component';
import { ApartadoComponent } from './components/externo/principal/apartado/apartado.component';
import { DatePipe } from '@angular/common';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './services/messaging.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RespuestaComponent } from './components/admin/notas/respuesta/respuesta.component';
import { PreparadosComponent } from './components/admin/plantillas/preparados/preparados.component';
import { EnvioComponent } from './components/admin/plantillas/envio/envio.component';
import { ProductionComponent } from './components/admin/plantillas/production/production.component';
import { PlanComponent } from './components/admin/plantillas/preparados/plan/plan.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    HistorialCompletoComponent,
    PedidossComponent,
    NotasComponent,
    AyudaComponent,
    AiudaComponent,
    PlantillasComponent,
    UsuariosComponent,
    NotasGComponent,
    UsuarioComponent,
    RegistroComponent,
    Page404Component,
    EnviosComponent,
    LoginComponent,
    HistorialComponent,
    NotificacionesComponent,
    PlanLaboralComponent,
    RecetasComponent,
    CajaaComponent,
    RecetarioAComponent,
    RecetarioComponent,
    RecetasAComponent,
    IngresosComponent,
    GastosComponent,
    PerdidasComponent,
    VentasComponent,
    GraficasComponent,
    GananciasComponent,
    PreElaboradosComponent,
    PedidosPendientesComponent,
    RutaComponent,
    HistorialPersonalComponent,
    ProduccionComponent,
    InsumosComponent,
    TemporadaComponent,
    PrincipalComponent,
    ProductosComponent,
    CreacionCuentaMayoreoComponent,
    CreacionCuentaMenudeoComponent,
    CuentaComponent,
    ReciboComponent,
    HistorialApartadosComponent,
    HistorialComprasComponent,
    CajasComponent,
    MermaComponent,
    PedidooComponent,
    SalesComponent,
    RegistroaComponent,
    EnvioComponent,
    AiudaComponent,
    SideComponent,
    LogoutComponent,
    RegistersComponent,
    MyDialogComponent,
    ComentarioComponent,
    CompraComponent,
    ApartadoComponent,
    RespuestaComponent,
    PreparadosComponent,
    PlantillasComponent,
    ProductionComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyCEcqcY8SlTqiJxGeVf1SjdcgEj4j0eCi0',
    }),
    AgmDirectionModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    MyDialogComponent,
    ComentarioComponent,
    CompraComponent,
    ApartadoComponent,
    RespuestaComponent,
    PlanComponent
  ],
  providers: [UserService, LoginService, NotaService, UsuarioService, DataService, RegisterService, RegisteraService, RegistersService,
     UsuariosService, AuthService, UserService, AiudaService, AuthGuard, FullprodService, MatNativeDateModule, MatDatepickerModule,
    MatDialogModule, DatePipe, AsyncPipe, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
