import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.page.html',
  styleUrls: ['./tenis.page.scss'],
})
export class TenisPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Tênis Esportivo Preto",
      descricao: "Tênis esportivo preto com design moderno.",
      preco: 179.99,
      foto: "caminho_da_imagem"
    },
    {
      nome: "Tênis Casual Branco",
      descricao: "Tênis casual branco com detalhes elegantes.",
      preco: 129.99,
      foto: "caminho_da_imagem"
    },
    // ... adicione mais produtos de tênis aqui ...
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
