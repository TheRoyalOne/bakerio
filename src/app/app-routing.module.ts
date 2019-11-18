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
import { AiudaComponent } from './components/general/aiuda/aiuda.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { RegistroaComponent } from './components/admin/registroa/registroa.component';
import { RegistersService } from './components/admin/registers/registers.service';
import { RegistersComponent } from './components/admin/registers/registers.component';
import { CreacionCuentaMayoreoComponent } from './components/externo/creacion-cuenta-mayoreo/creacion-cuenta-mayoreo.component';
import { PreparadosComponent } from './components/admin/plantillas/preparados/preparados.component';
import { EnvioComponent } from './components/admin/plantillas/envio/envio.component';
import { ProductionComponent } from './components/admin/plantillas/production/production.component';
const routes: Routes = [
{path: '', component: LoginComponent },
{path: 'admin/help', component: AyudaComponent,  canActivate: [AuthGuard] }, // Proteger.
{path: 'admin/earns', component: GananciasComponent,  canActivate: [AuthGuard]  },
{path: 'admin/spends', component: GastosComponent,  canActivate: [AuthGuard]  },
{path: 'admin/graphs', component: GraficasComponent,  canActivate: [AuthGuard]  },
{path: 'admin/history', component: HistorialCompletoComponent,  canActivate: [AuthGuard]  }, // Proteger.
{path: 'admin/inputs', component: IngresosComponent,  canActivate: [AuthGuard]  },
{path: 'admin/preps', component: PreElaboradosComponent,  canActivate: [AuthGuard]  },
{path: 'admin/notes', component: NotasComponent,  canActivate: [AuthGuard]  }, // Proteger.
{path: 'admin/losses', component: PerdidasComponent,  canActivate: [AuthGuard]  },
{path: 'admin/templates', component: PlantillasComponent ,  canActivate: [AuthGuard] }, // Proteger.
{path: 'admin/templates/prod', component: ProductionComponent ,  canActivate: [AuthGuard] }, // Proteger.
{path: 'admin/templates/prep', component: PreparadosComponent ,  canActivate: [AuthGuard] }, // Proteger.
{path: 'admin/templates/envios', component: EnvioComponent ,  canActivate: [AuthGuard] }, // Proteger.
{path: 'admin/slaves', component: UsuariosComponent,  canActivate: [AuthGuard] },
{path: 'admin/register/mayo', component: RegistroaComponent,  canActivate: [AuthGuard] },
{path: 'admin/register/slaves', component: RegistersComponent,  canActivate: [AuthGuard] },
{path: 'admin/sales', component: VentasComponent ,  canActivate: [AuthGuard] },
{path: 'envio/shippings', component: EnviosComponent ,  canActivate: [AuthGuard] },
{path: 'envio/route', component: RutaComponent ,  canActivate: [AuthGuard] },
{path: 'ext/createmen', component: CreacionCuentaMenudeoComponent },
{path: 'ext/createmay', component: CreacionCuentaMayoreoComponent },
{path: 'ext/account', component: CuentaComponent ,  canActivate: [AuthGuard] },
{path: 'ext/apart', component: HistorialApartadosComponent, canActivate: [AuthGuard]},
{path: 'ext/purchases', component: HistorialComprasComponent ,  canActivate: [AuthGuard] },
{path: 'ext/order', component: PedidooComponent ,  canActivate: [AuthGuard] },
{path: 'ext/principal', component: PrincipalComponent },
{path: 'ext/products', component: ProductosComponent },
{path: 'ext/receipt', component: ReciboComponent ,  canActivate: [AuthGuard] },
{path: 'user/history', component: HistorialComponent ,  canActivate: [AuthGuard] },
{path: 'login', component: LoginComponent, pathMatch: 'full'},
{path: 'user/notes', component: NotasGComponent ,  canActivate: [AuthGuard] },
{path: '911', component: AiudaComponent},
{path: 'user/notifications', component: NotificacionesComponent ,  canActivate: [AuthGuard] },
{path: 'admin/register/menudo', component: RegistroComponent},
{path: 'user/profile', component: UsuarioComponent,  canActivate: [AuthGuard] },
{path: 'uapep/recetary', component: RecetarioComponent ,  canActivate: [AuthGuard] },
{path: 'uapep/admin/recetary', component: RecetarioAComponent,  canActivate: [AuthGuard]  },
{path: 'uapep/recipe', component: RecetasComponent ,  canActivate: [AuthGuard] },
{path: 'uapep/admin/recipes', component: RecetasAComponent ,  canActivate: [AuthGuard] },
{path: 'uav/cashier', component: CajaaComponent,  canActivate: [AuthGuard] },
{path: 'uav/history', component: HistorialPersonalComponent,  canActivate: [AuthGuard] },
{path: 'uav/Inputs', component: InsumosComponent,  canActivate: [AuthGuard] },
{path: 'uav/production', component: ProduccionComponent,  canActivate: [AuthGuard] },
{path: 'uav/sales', component: SalesComponent,  canActivate: [AuthGuard] },
{path: 'uav/season', component: TemporadaComponent,  canActivate: [AuthGuard] },
{path: 'uav/orders', component: PedidossComponent,  canActivate: [AuthGuard] },
{path: 'uavee/pending', component: PedidosPendientesComponent,  canActivate: [AuthGuard] },
{path: 'upev/loss', component: MermaComponent,  canActivate: [AuthGuard] },
{path: 'uv', component: PlanLaboralComponent,  canActivate: [AuthGuard] },
{path: 'sales', component: CajasComponent,  canActivate: [AuthGuard] },
{path: 'logout', component: LogoutComponent,  canActivate: [AuthGuard] },
{path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
