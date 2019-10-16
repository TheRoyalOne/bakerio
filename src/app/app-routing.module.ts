import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyudaComponent } from './components/admin/ayuda/ayuda.component';
import { GananciasComponent } from './components/admin/ganancias/ganancias.component';
import { GastosComponent } from './components/admin/gastos/gastos.component';
import { GraficasComponent } from './components/admin/graficas/graficas.component';
import { HistorialCompletoComponent } from './components/admin/historial-completo/historial-completo.component';
import { IngresosComponent } from './components/admin/ingresos/ingresos.component';
import { PreElaboradosComponent } from './components/admin/inventario/pre-elaborados/pre-elaborados.component';
import { NotasComponent } from './components/admin/notas/notas.component';
import { PerdidasComponent } from './components/admin/perdidas/perdidas.component';
import { PlantillasComponent } from './components/admin/plantillas/plantillas.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { RutaComponent } from './components/envio/ruta/ruta.component';
import { CreacionCuentaMayoreoComponent } from './components/externo/creacion-cuenta-mayoreo/creacion-cuenta-mayoreo.component';
import { CreacionCuentaMenudeoComponent } from './components/externo/creacion-cuenta-menudeo/creacion-cuenta-menudeo.component';
import { CuentaComponent } from './components/externo/cuenta/cuenta.component';
import { HistorialApartadosComponent } from './components/externo/historial-apartados/historial-apartados.component';
import { HistorialComprasComponent } from './components/externo/historial-compras/historial-compras.component';
import { PrincipalComponent } from './components/externo/principal/principal.component';
import { ProductosComponent } from './components/externo/productos/productos.component';
import { ReciboComponent } from './components/externo/recibo/recibo.component';
import { HistorialComponent } from './components/general/historial/historial.component';
import { LoginComponent } from './components/general/login/login.component';
import { NotasGComponent } from './components/general/notas-g/notas-g.component';
import { NotificacionesComponent } from './components/general/notificaciones/notificaciones.component';
import { RegistroComponent } from './components/general/registro/registro.component';
import { UsuarioComponent } from './components/general/usuario/usuario.component';
import { Page404Component } from './components/page404/page404.component';
import { RecetarioComponent } from './components/u_ad_pro_emp_pre/recetario/recetario.component';
import { RecetasAComponent } from './components/u_ad_pro_emp_pre/recetas-a/recetas-a.component';
import { RecetasComponent } from './components/u_ad_pro_emp_pre/recetas/recetas.component';
import { RecetarioAComponent } from './components/u_ad_pro_emp_pre/recetario-a/recetario-a.component';
import { HistorialPersonalComponent } from './components/u_ad_ven/historial-personal/historial-personal.component';
import { InsumosComponent } from './components/u_ad_ven/inventario/insumos/insumos.component';
import { ProduccionComponent } from './components/u_ad_ven/inventario/produccion/produccion.component';
import { TemporadaComponent } from './components/u_ad_ven/inventario/temporada/temporada.component';
import { PedidossComponent } from './components/u_ad_ven/pedidoss/pedidoss.component';
import { PedidosPendientesComponent } from './components/u_ad_ven_env_emp_pre/pedidos-pendientes/pedidos-pendientes.component';
import { MermaComponent } from './components/u_prod_emp_ven/merma/merma.component';
import { PlanLaboralComponent } from './components/u-v/plan-laboral/plan-laboral.component';
import { CajasComponent } from './components/ventas/cajas/cajas.component';
import { PedidooComponent } from './components/externo/pedidoo/pedidoo.component';
import { SalesComponent } from './components/u_ad_ven/inventario/sales/sales.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { EnviosComponent } from './components/envio/envios/envios.component';
import { CajaaComponent } from './components/u_ad_ven/cajaa/cajaa.component';


const routes: Routes = [
{path: '', component: LoginComponent },
{path: 'admin/help', component: AyudaComponent }, // Proteger.
{path: 'admin/earns', component: GananciasComponent },
{path: 'admin/spends', component: GastosComponent },
{path: 'admin/graphs', component: GraficasComponent },
{path: 'admin/history', component: HistorialCompletoComponent }, // Proteger.
{path: 'admin/inputs', component: IngresosComponent },
{path: 'admin/preps', component: PreElaboradosComponent },
{path: 'admin/notes', component: NotasComponent }, // Proteger.
{path: 'admin/losses', component: PerdidasComponent },
{path: 'admin/templates', component: PlantillasComponent }, // Proteger.
{path: 'admin/slaves', component: UsuariosComponent },
{path: 'admin/sales', component: VentasComponent },
{path: 'envio/shippings', component: EnviosComponent },
{path: 'envio/route', component: RutaComponent },
{path: 'ext/createmen', component: CreacionCuentaMenudeoComponent },
{path: 'ext/createmay', component: CreacionCuentaMenudeoComponent },
{path: 'ext/account', component: CuentaComponent },
{path: 'ext/apart', component: HistorialApartadosComponent },
{path: 'ext/purchases', component: HistorialComprasComponent },
{path: 'ext/order', component: PedidooComponent },
{path: 'ext/principal', component: PrincipalComponent },
{path: 'ext/products', component: ProductosComponent },
{path: 'ext/receipt', component: ReciboComponent },
{path: 'history', component: HistorialComponent },
{path: 'login', component: LoginComponent, pathMatch: 'full'},
{path: 'notes', component: NotasGComponent },
{path: 'notifications', component: NotificacionesComponent },
{path: 'register', component: RegistroComponent },
{path: 'profile', component: UsuarioComponent },
{path: 'uapep/recetary', component: RecetarioComponent },
{path: 'uapep/admin/recetary', component: RecetarioAComponent },
{path: 'uapep/recipe', component: RecetasComponent },
{path: 'uapep/admin/recipes', component: RecetasAComponent },
{path: 'uav/cashier', component: CajaaComponent},
{path: 'uav/history', component: HistorialPersonalComponent},
{path: 'uav/Inputs', component: InsumosComponent},
{path: 'uav/production', component: ProduccionComponent},
{path: 'uav/sales', component: SalesComponent},
{path: 'uav/season', component: TemporadaComponent},
{path: 'uav/orders', component: PedidossComponent},
{path: 'uavee/pending', component: PedidosPendientesComponent},
{path: 'upev/loss', component: MermaComponent},
{path: 'uv/', component: PlanLaboralComponent},
{path: 'sales/', component: CajasComponent},
{path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
