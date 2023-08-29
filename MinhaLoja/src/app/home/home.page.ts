import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  qtdeItensCarrinho = 0;

  categorias = [
    { nome: "Camisas", rota: "camisas", cor: "primary", imagem: "caminho_da_imagem" },
    { nome: "Calças", rota: "calcas", cor: "secondary", imagem: "caminho_da_imagem" },
    { nome: "Tênis", rota: "tenis", cor: "tertiary", imagem: "caminho_da_imagem" },
    { nome: "Acessórios", rota: "acessorios", cor: "quaternary", imagem: "caminho_da_imagem" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
