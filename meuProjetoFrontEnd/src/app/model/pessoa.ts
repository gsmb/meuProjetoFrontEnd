export class Pessoa {

    nome: string;
    idade: number;
    sexo: string;
    endereco: string;
    data_nascimento: string;
    cpf: string;

    constructor(nome: string, idade: number, sexo: string, endereco: string, data_nascimento: string, cpf: string) 
    {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.endereco = endereco;
        this.data_nascimento = data_nascimento;
        this.cpf = cpf;
    }


    
}
