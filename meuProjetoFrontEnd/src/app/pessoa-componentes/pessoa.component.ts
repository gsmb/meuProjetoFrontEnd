import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa-servicos/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {

  constructor(private pessoaServico: PessoaService) {   }

  ngOnInit() { }
}

