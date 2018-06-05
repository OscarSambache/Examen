import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CaruselComponent } from './carusel/carusel.component';
import {MatInputModule} from '@angular/material/input';
import { InputMatComponent } from './input-mat/input-mat.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RadioButtonMatComponent } from './radio-button-mat/radio-button-mat.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { TiendaCardComponent } from './tienda-card/tienda-card.component';
import {CardModule} from 'primeng/card';
import { TablaComponent } from './tabla/tabla.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    CaruselComponent,
    InputMatComponent,
    RadioButtonMatComponent,
    CabezeraComponent,
    ContenedorComponent,
    DetalleProductoComponent,
    TiendaCardComponent,
    TablaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
