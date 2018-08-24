import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoal-controller',
  templateUrl: './pessoal-controller.component.html',
  styleUrls: ['./pessoal-controller.component.css']
})

export class PessoalControllerComponent implements OnInit {

  pessoa = new Pessoa("Gabriel", 15, "M","asdas","20/20/20", "14755976731");

  constructor() {
   }

  ngOnInit() {
  }

  obterPessoa() {

  }

  listarPessoas() {

  }

  editarPessoa(){

  }

  deletarPessoa() {

  }

  msgAlerta() {
    console.log("Hello estou aparecendo");
  }
  
}

