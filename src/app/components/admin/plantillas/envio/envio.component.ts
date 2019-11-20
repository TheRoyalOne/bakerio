import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  
  direccion: string = null;
  public origin: string;
  public destination: string = null;

  location = {};
   setPosition(position){
      this.location = position.coords;
      console.log(position.coords);
      }
      ngOnInit(){
        if(navigator.geolocation){
          navigator.geolocation.watchPosition(position => {
             this.location = position.coords;
             console.log(position.coords); 
           });
        }
      }
      getDirection() {
        this.origin =  'Calle Juan Zubaran 2311';
        this.destination = this.direccion+',Guadalajara';
        }
    }
