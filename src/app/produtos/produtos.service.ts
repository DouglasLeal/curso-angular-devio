import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private urlServiceV1: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  listarProdutos() : Observable<Produto[]> {
    return this.http
      .get<Produto[]>(this.urlServiceV1+"/produtos");
  }
}
