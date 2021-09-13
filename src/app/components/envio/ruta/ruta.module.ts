import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { RutaComponent } from './ruta.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    BrowserModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEcqcY8SlTqiJxGeVf1SjdcgEj4j0eCi0'
    }),
    AgmDirectionModule,
  ],
  providers: [],
  declarations: [ RutaComponent ],
  bootstrap: [ RutaComponent ]
})
export class RutaModule {}
