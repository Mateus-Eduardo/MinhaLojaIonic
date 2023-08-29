import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.page.html',
  styleUrls: ['./camisas.page.scss'],
})
export class CamisasPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Camisa Casual Azul",
      descricao: "Camisa casual de cor azul com detalhes elegantes.",
      preco: 89.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Camisa Listrada",
      descricao: "Camisa listrada em tons de preto e branco.",
      preco: 79.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Camisa Estampada",
      descricao: "Camisa estampada com padrão geométrico.",
      preco: 99.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Camisa Polo",
      descricao: "Camisa polo clássica em cores variadas.",
      preco: 69.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Camisa Xadrez",
      descricao: "Camisa xadrez em tons de vermelho e preto.",
      preco: 84.99,
      foto: "caminho_da_imagem"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    // Implemente a lógica para adicionar o produto ao carrinho aqui
  }

}
