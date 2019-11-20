import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { RutasComponent } from './rutas.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEcqcY8SlTqiJxGeVf1SjdcgEj4j0eCi0'
    }),
    AgmDirectionModule,
  ],
  providers: [],
  declarations: [ RutasComponent ],
  bootstrap: [ RutasComponent ]
})
export class RutaModule {}