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
  this.relatorioFinanceiroService.listar().subscribe({
    next: (relatorioFinanceiro) => {
      const relatoriosFinanceirosOrdenados = [...relatorioFinanceiro].sort((x, y) => {
      return new Date(y.dataEmissao!).getTime() - new Date(x.dataEmissao!).getTime();});
      this.relatoriosFinanceiros.set(relatoriosFinanceirosOrdenados);
    },
    error: erro => {
      console.error('Erro ao carregar relatórios:', erro);
    }
  });
}

apagar(id: string): void {
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
