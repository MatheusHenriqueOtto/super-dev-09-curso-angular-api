import { Component, inject, signal } from '@angular/core';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { RelatorioFinanceiroModel } from '../../models/relatorio-finaceiro.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relatorio-financeiro-editar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-editar.html',
  styleUrl: './relatorio-financeiro-editar.scss',
})
export class RelatorioFinanceiroEditar {
  private readonly realotorioFinanceiroService = inject(RelatorioFinanceiroService);

  relatorioFinanceiro = signal<RelatorioFinanceiroModel>({
    id: "",
    titulo: "",
    tipo: "",
    valorTotal: 0,
    dataEmissao: "",
    responsavel: ""
  });


  constructor(private activeRoute: ActivatedRoute,private router: Router) {
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    if (idParaEditar === null){
      alert("Não encontrado o id da tarefa na rota");
      this.router.navigate(["/relatorios-financeiros"]);
      return
    }
    this.relatorioFinanceiro.update(relatorioFinanceiro => ({
      ...relatorioFinanceiro, 
      id: idParaEditar,
    }));
    this.consultarRelatorioFinanceiro();
  }

  consultarRelatorioFinanceiro(): void {
    this.realotorioFinanceiroService.obterPorId(this.relatorioFinanceiro().id).subscribe({
      next: relatorioFinanceiro => {
        this.relatorioFinanceiro.update(() => ({
          id: relatorioFinanceiro.id,
          titulo: relatorioFinanceiro.titulo,
          tipo: relatorioFinanceiro.tipo,
          valorTotal: relatorioFinanceiro.valorTotal,
          dataEmissao: relatorioFinanceiro.dataEmissao,
          responsavel: relatorioFinanceiro.responsavel,
        }))
      },
      error: erro => {
        console.error("Não deu para consultar, deu erro: ", erro);
        alert("Não deu boa ao consultar o relatorio");
      }
    })
  }

  salvar(): void {
    this.realotorioFinanceiroService.editar(this.relatorioFinanceiro().id, this.relatorioFinanceiro()).subscribe({
      next: relatorioFinanceiro => {
        alert("Relatorio editaodo com sucesso");
        this.router.navigate(["/relatorios-financeiros"]);
      },
      error: erro => {
        console.error("Deu um erro ao salvar a alteração, esse erro: ", erro);
        alert("Não deu boa ao salvar a alteração");
      }
    });
  }


}
