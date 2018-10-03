import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../../pessoa-servicos/pessoa.service';
import {PessoaModel} from '../../pessoa-model/PessoaModel';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})
export class ListPessoaComponent implements OnInit {

  pessoas: PessoaModel[];

  constructor(private pessoaServico: PessoaService) { }

  ngOnInit() {
    this.pessoaServico.getPessoas()
      .subscribe(
        (data: PessoaModel[]) => {
          this.pessoas = data;
        });
  }
}
