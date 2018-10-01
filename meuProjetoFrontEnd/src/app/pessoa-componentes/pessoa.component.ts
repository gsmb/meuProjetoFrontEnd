import { PessoaModel } from './../pessoa-model/PessoaModel';
import { PessoaService } from './../pessoa-servicos/pessoa.service';
import { Component, OnInit } from '@angular/core';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {

  pessoa = new PessoaModel();

  constructor(private pessoaServico: PessoaService) {   }

  ngOnInit() { }

  enviarDados() {
    this.pessoaServico.criarPessoa(this.pessoa);
  }
}

