import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../general/notas-g/nota.service';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas: any[] = [];
  constructor(
    protected notaService: NotaService) { }

  ngOnInit() {
    this.notaService.getNotasfull()
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
