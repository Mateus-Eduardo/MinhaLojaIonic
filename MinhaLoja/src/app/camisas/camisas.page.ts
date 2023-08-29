import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.page.html',
  styleUrls: ['./camisas.page.scss'],
})
export class CamisasPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Camisa Casual Laranja",
      descricao: "Camisa casual de cor azul com detalhes elegantes.",
      preco: 89.99,
      foto: '../../assets/img/camisaLaranja.jpg'
    },
    {
      nome: "Camisa Listrada",
      descricao: "Camisa listrada em tons de preto e branco.",
      preco: 79.99,
      foto: '../../assets/img/camisaLaranja.jpg'
    },
    {
      nome: "Camisa Estampada",
      descricao: "Camisa estampada com padrão geométrico.",
      preco: 99.99,
      foto: '../../assets/img/camisaLaranja.jpg'
    },
    {
      nome: "Camisa Polo",
      descricao: "Camisa polo clássica em cores variadas.",
      preco: 69.99,
      foto: '../../assets/img/camisaLaranja.jpg'
    },
    {
      nome: "Camisa Xadrez",
      descricao: "Camisa xadrez em tons de vermelho e preto.",
      preco: 84.99,
      foto: '../../assets/img/camisaLaranja.jpg'
    }
  ];

  constructor(private bdtempService: BdtempService) { }

  ngOnInit() {
  }

 
  addProdutoCarrinho(produto: any){
    this.bdtempService.addProdutoCarrinho(produto); // Use the injected service
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho');
  }

}
