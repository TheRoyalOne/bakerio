import { Component, OnInit } from '@angular/core';
import { AiudaService } from './aiuda.service';

@Component({
  selector: 'app-aiuda',
  templateUrl: './aiuda.component.html',
  styleUrls: ['./aiuda.component.css']
})
export class AiudaComponent implements OnInit {
  consejos: any[] = [];
  constructor(
    protected aiudaService: AiudaService) { }

  ngOnInit() {
    this.aiudaService.getHelp()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.consejos = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

