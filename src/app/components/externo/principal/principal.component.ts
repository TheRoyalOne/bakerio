import { Component, OnInit } from '@angular/core';
import { FullprodService } from './fullprod.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  productos: any[] = [];
  constructor(
    protected principe: FullprodService) { }

  ngOnInit() {
    this.principe.getProd()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.productos = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}


