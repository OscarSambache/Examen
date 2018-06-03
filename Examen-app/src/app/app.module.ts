import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
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



@NgModule({
  declarations: [
    AppComponent,
    CaruselComponent,
    InputMatComponent,
    RadioButtonMatComponent,
    CabezeraComponent
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
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
