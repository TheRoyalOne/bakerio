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
import { NavbarComponent } from './components/navbar/navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HistorialCompletoComponent,
    NotasComponent,
    AyudaComponent,
    PlantillasComponent,
    UsuariosComponent,
    NavbarComponent,
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
    EnviosComponent
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
