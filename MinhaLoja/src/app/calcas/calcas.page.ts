import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcas',
  templateUrl: './calcas.page.html',
  styleUrls: ['./calcas.page.scss'],
})
export class CalcasPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Calça Jeans Skinny",
      descricao: "Calça jeans skinny com lavagem escura.",
      preco: 119.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Calça Cargo",
      descricao: "Calça cargo com vários bolsos e estilo urbano.",
      preco: 89.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Calça Social",
      descricao: "Calça social elegante para ocasiões formais.",
      preco: 139.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Calça Moletom",
      descricao: "Calça moletom confortável para uso casual.",
      preco: 69.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Calça Chino",
      descricao: "Calça chino em tecido leve e versátil.",
      preco: 99.99,
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
