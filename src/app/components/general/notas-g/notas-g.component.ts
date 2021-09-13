import { Component, OnInit } from '@angular/core';
import { NotaService } from './nota.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-notas-g',
  templateUrl: './notas-g.component.html',
  styleUrls: ['./notas-g.component.css']
})
export class NotasGComponent implements OnInit {
  notas: any[] = [];
  constructor(
    protected notaService: NotaService, public Auth: AuthService) { }

  ngOnInit() {
    this.notaService.getNotas()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.notas = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
}

}
