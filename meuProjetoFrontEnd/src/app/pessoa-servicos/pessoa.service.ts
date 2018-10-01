import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { PessoaModel } from '../pessoa-model/PessoaModel';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/api/pessoas';

  getPessoas() {
    return this.http.get<PessoaModel[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<PessoaModel>(this.baseUrl + '/' + id);
  }

  createUser(pessoa: PessoaModel) {
    return this.http.post(this.baseUrl, pessoa);
  }

  updateUser(pessoa: PessoaModel) {
    return this.http.put(this.baseUrl + '/' + pessoa.id, pessoa);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }


}
