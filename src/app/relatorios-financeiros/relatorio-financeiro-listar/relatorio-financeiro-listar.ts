import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { RelatorioFinanceiroModel } from '../../models/relatorio-finaceiro.model';

@Component({
  selector: 'app-relatorio-financeiro-listar',
  imports: [RouterLink],
  templateUrl: './relatorio-financeiro-listar.html',
  styleUrl: './relatorio-financeiro-listar.scss',
})
export class RelatorioFinanceiroListar {
  private readonly relatorioFinanceiroService = inject(RelatorioFinanceiroService);

  relatoriosFinanceiros = signal<RelatorioFinanceiroModel[]>([]);

  ngOnInit(){
    this.carregarRelatoriosFinanceiros();
  }

carregarRelatoriosFinanceiros(): void {
  // Correção ortográfica no nome do serviço: relatorioFinanceiroServico
  this.relatorioFinanceiroService.listar().subscribe({
    next: (relatorioFinanceiro) => {
      // Copia o array para evitar mutar o estado original e ordena convertendo as datas para milissegundos
      const relatoriosFinanceirosOrdenados = [...relatorioFinanceiro].sort((x, y) => {
      return new Date(y.dataEmissao!).getTime() - new Date(x.dataEmissao!).getTime();});
      this.relatoriosFinanceiros.set(relatoriosFinanceirosOrdenados);
      alert("Relatorio cadastrado");
    },
    error: erro => {
      console.error('Erro ao carregar relatórios:', erro);
    }
  });
}

apagar(id: number): void {
  this.relatorioFinanceiroService.apagar(id).subscribe({
    next: () => {
      alert("Deu boa, relatorio apagado com sucesso")
      this.carregarRelatoriosFinanceiros();
    },
    error: erro => {
      console.error("Deu erro ao apagar esse relatorio: ", erro);
      alert("Não deu boa");
    }
  })
} 
}
