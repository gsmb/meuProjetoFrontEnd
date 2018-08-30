import { PessoaModel } from '../model/PessoaModel';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa-servicos/pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {

  pessoa = new PessoaModel("Gabriel", "gabrielbar62@gmail.com", "M","asdas","20/20/20", "14755976731");

  constructor(private pessoaServico: PessoaService) {
   }

  ngOnInit() {
  }


  enviarDados() {
    alert('Seus dados foram enviados');
  }
  
}

