import { PessoalControllerComponent } from './pessoal-controller/pessoal-controller.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  FormsModule
];


@NgModule({
  declarations: [
    AppComponent, PessoalControllerComponent
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
