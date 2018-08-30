import { PessoaModel } from '../model/PessoaModel';
import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoas: PessoaModel [] = [];
  enviarPessoa = new EventEmitter();

  constructor() { }

  setPessoa(novaPessoa: PessoaModel): void {
      this.pessoas.push(novaPessoa);
      this.enviarPessoa.emit(this.pessoas);
  }

  getContato(id: number): PessoaModel {
    let pessoa: PessoaModel;

    pessoa = this.pessoas[id];
    return pessoa;
  }
}
