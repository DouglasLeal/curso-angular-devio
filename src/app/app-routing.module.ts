import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "sobre", component: SobreComponent},
  {path: "produtos", component: ListaProdutoComponent},
  {path: "binding", component: DatabindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
