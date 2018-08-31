import { RouterModule, Routes } from '@angular/router';
import { AddPessoaComponent } from '../pessoa-crud/add-pessoa/add-pessoa.component';
import { ListPessoaComponent } from '../pessoa-crud/list-pessoa/list-pessoa.component';
import { EditPessoaComponent } from '../pessoa-crud/edit-pessoa/edit-pessoa.component';

const routes: Routes = [
  { path: 'add-pessoa', component: AddPessoaComponent },
  { path: 'list-pessoa', component: ListPessoaComponent },
  { path: 'edit-pessoa', component: EditPessoaComponent },
];

export const routing = RouterModule.forRoot(routes);
