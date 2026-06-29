import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { Router } from '@angular/router';
import { RelatorioFinanceiroModel } from '../../models/relatorio-finaceiro.model';

@Component({
  selector: 'app-relatorio-financeiro-cadastrar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-cadastrar.html',
  styleUrl: './relatorio-financeiro-cadastrar.scss',
})
export class RelatorioFinanceiroCadastrar {
  private readonly relatorioFinanceiroService = inject(RelatorioFinanceiroService);
  private readonly router = inject(Router)

  relatorioFinanceiro = signal<RelatorioFinanceiroModel>({
    id: "",
    titulo: "",
    tipo: "",
    valorTotal: 0,
    dataEmissao: "",
    responsavel: "",
  });

  salvar(): void {
    this.relatorioFinanceiroService.cadastrar(this.relatorioFinanceiro()).subscribe({
      next: relatorioFinanceiro => {
        alert("Deu boa, o relatorio foi cadastrado!");
        this.router.navigate(["relatorios-financeiros"]);
      },
      error: erro => {
        console.error("Erro ao cadastrar o relatorio, deu "+ erro);
        alert("Não deu boa");
      }
    })
  }
}
