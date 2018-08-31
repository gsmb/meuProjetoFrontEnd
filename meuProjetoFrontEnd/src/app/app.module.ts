import { ConfigService } from './servicos/config-service';
import { PessoaComponent } from './pessoa-componentes/pessoa.component';
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
import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './pessoa-servicos/pessoa.service';
import { HttpModule } from '@angular/http';
import { AddPessoaComponent } from './pessoa-crud/add-pessoa/add-pessoa.component';
import { EditPessoaComponent } from './pessoa-crud/edit-pessoa/edit-pessoa.component';
import { ListPessoaComponent } from './pessoa-crud/list-pessoa/list-pessoa.component';

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
  FormsModule,
  HttpClientModule,
  HttpModule
];


@NgModule({
  declarations: [
    AppComponent, PessoaComponent, AddPessoaComponent, EditPessoaComponent, ListPessoaComponent
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [PessoaService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
