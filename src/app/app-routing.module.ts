import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { AyudaComponent } from './components/admin/ayuda/ayuda.component';
import { EnviosComponent } from './components/admin/envios/envios.component';
import { FaqGComponent } from './components/general/faq-g/faq-g.component';
import { HistorialCompletoComponent } from './components/admin/historial-completo/historial-completo.component';
import { InventarioInsumosComponent } from './components/admin/inventario-insumos/inventario-insumos.component';
import { InventarioProduccionComponent } from './components/admin/inventario-produccion/inventario-produccion.component';
import { NotasComponent } from './components/admin/notas/notas.component';
import { PedidosComponent } from './components/admin/pedidos/pedidos.component';
import { PlantillasComponent } from './components/admin/plantillas/plantillas.component';
import { RecetarioComponent } from './components/admin/recetario/recetario.component';
import { TareasDetallesComponent } from './components/admin/tareas-detalles/tareas-detalles.component';
import { UsuarioComponent } from './components/general/usuario/usuario.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { LoginComponent } from './components/general/login/login.component';
import { RegistroComponent } from './components/general/registro/registro.component';
import { RecetarioProduccionComponent } from './components/Produccion/recetario-produccion/recetario-produccion.component';
import { NotasGComponent } from './components/general/notas-g/notas-g.component';


const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'admin/help', component: AyudaComponent }, // Proteger.
{path: 'admin/ship', component: EnviosComponent }, // Proteger.
{path: 'faq', component: FaqGComponent },
{path: 'admin/historya', component: HistorialCompletoComponent }, // Proteger.
{path: 'admin/stockconsum', component: InventarioInsumosComponent }, // Proteger.
{path: 'admin/stockprod', component: InventarioProduccionComponent }, // Proteger.
{path: 'admin/notes', component: NotasComponent }, // Proteger.
{path: 'admin/order', component: PedidosComponent }, // Proteger.
{path: 'admin/templates', component: PlantillasComponent }, // Proteger.
{path: 'admin/recetory', component: RecetarioComponent }, // Proteger.
{path: 'admin/task/:id', component: TareasDetallesComponent }, // Proteger.
{path: 'admin/users', component: UsuariosComponent }, // Proteger.
{path: 'login', component: LoginComponent, pathMatch: 'full'},
{path: 'user', component: UsuarioComponent },
{path: 'register', component: RegistroComponent },
{path: 'admin/recipes', component: RecetarioComponent },
{path: 'recipes', component: RecetarioProduccionComponent },
{path: 'notesg', component: NotasGComponent },
{path: 'notes', component: NotasComponent },
{path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
