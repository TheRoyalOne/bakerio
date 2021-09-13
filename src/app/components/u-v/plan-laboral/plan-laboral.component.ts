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
  cod = null;
  kk = null;
  myVar;
 that = this;

  art = {
  actividad: null,
  producto: null,
  prods: null,
  tam: null
  };
  constructor(
    protected usuarioService: UsuarioService, private data: DataService, protected plan: PlanService) { }

  ngOnInit() {
    this.getplan();
  }
  getplan() {
    this.plan.getUsers()
    .subscribe(result => {this.usuarios = result; this.myFunction(); });
  }
  myFunction() {
    console.log(this.usuarios[0].Duracion);
    console.log(this.usuarios[0].Id);
    this.kk = this.usuarios[0].Id;
    this.myVar = setTimeout(() => { this.tiempoacabado(); }  , this.usuarios[0].Duracion * 60000, this );
  }
  tiempoacabado() {
    console.log(this.kk);
    this.atrasar(this.kk);
    alert(['Estas retrasado']);
    window.location.reload();
  }
  atrasar(codigo) {
    this.cod = codigo;
    this.plan.atraso(codigo).subscribe(datos => {
    });
  }
  terminar(codigo, prod, pro, len) {
    clearTimeout(this.myVar);
    this.art.actividad = codigo;
    this.art.prods = pro;
    this.art.producto = prod;
    this.art.tam = len;
    console.log(this.art.actividad);
    console.log(this.art.producto);
    console.log(this.art.prods);
    console.log(this.art.tam);
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
