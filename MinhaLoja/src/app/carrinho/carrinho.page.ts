
import { Component } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss'],
})
export class CarrinhoPage {
  qtdeItensCarrinho = 0;
  total = 0;

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

  constructor(private bdtempService: BdtempService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Obtenha os itens do carrinho e o qtdeItensCarrinho do serviço ao entrar na página
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho') || 0; // Adicione esta linha para exibir o total
  }

  addProdutoCarrinho(produto: any) {
    this.bdtempService.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho');
    this.total = this.bdtempService.buscar('totalCarrinho'); // Atualize o total após adicionar produto
  }

  removerItem(index: number) {
    this.bdtempService.removeProdutoCarrinho(index);
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho'); // Atualize o total após remover produto
  }

  limparCarrinho() {
    this.bdtempService.limparCarrinho();
    this.listaProdutos = [];
    this.qtdeItensCarrinho = 0;
    this.total = 0; // Zere o total após limpar carrinho
  }

  concluirCompra() {
    const carrinho = this.bdtempService.buscar('carrinho');

    if (carrinho && carrinho.length > 0) {
      // Aqui você pode realizar as ações necessárias para concluir a compra
      // Por exemplo, salvar a compra no banco de dados, exibir uma mensagem de sucesso, etc.
      this.bdtempService.limparCarrinho(); // Limpar o carrinho após a conclusão da compra
      console.log('Compra concluída com sucesso.');
    } else {
      console.log('Não é possível concluir a compra, carrinho vazio.');
    }
  
}

}
