import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  public cliques: number = 0;
  public urlImagem: string = "https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png";
  public nome: string = "";

  public clicar(valor: number){
    this.cliques += valor;
  }

  public zerarCliques(){
    this.cliques = 0;
  }

  public keyUpEvent(evento: any){
    this.nome = evento.target.value;
  }
}
