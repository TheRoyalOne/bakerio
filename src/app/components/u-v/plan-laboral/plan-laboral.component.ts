import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../general/usuario/usuario.service';
import { DataService } from '../../general/usuario/data.service';
import { PlanService } from './plan.service';
@Component({
  selector: 'app-plan-laboral',
  templateUrl: './plan-laboral.component.html',
  styleUrls: ['./plan-laboral.component.css']
})
export class PlanLaboralComponent implements OnInit {
  usuarios = null;
  actividad = null;
  producto = null;
  prods = null;
  art = {
  actividad: null,
  producto: null,
  prods: null
  };
  constructor(
    protected usuarioService: UsuarioService, private data: DataService, protected plan: PlanService) { }

  ngOnInit() {
    this.getplan();
  }
  getplan() {
    this.plan.getUsers()
    .subscribe(result => this.usuarios = result);
  }
  terminar(codigo, prod, pro) {
    this.art.actividad = codigo;
    this.art.prods = pro;
    this.art.producto = prod;
    console.log(this.art.actividad);
    console.log(this.art.producto);
    console.log(this.art.prods);
    this.plan.terminar(this.art)
    .subscribe(result => {
      // tslint:disable-next-line:no-string-literal
      if (result['resultado'] === 'OK') {
        this.getplan();
        // tslint:disable-next-line:no-string-literal
        alert(result['mensaje']);
        this.usuarios = result;
      } else {
        this.getplan();
        // tslint:disable-next-line:no-string-literal
        alert(result['mensaje']);
        this.usuarios = result;
      } });
  }
  cancelar() {

  }

}
