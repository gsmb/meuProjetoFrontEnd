import { PessoaModel } from './../pessoa-model/PessoaModel';
import { PessoaService } from './../pessoa-servicos/pessoa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {

  pessoas: PessoaModel[];

  constructor(private pessoaServico: PessoaService) {   }

  ngOnInit() { 

    this.pessoaServico.getPessoas().subscribe((
        pessoas: any[]) => {
        this.pessoas = pessoas['content'];
      },
      (error) => console.log(error)
    );
  }
}

