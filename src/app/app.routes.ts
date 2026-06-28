import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';
import { ProjetoListar } from './projetos/projeto-listar/projeto-listar';
import { ProjetoEditar } from './projetos/projeto-editar/projeto-editar';
import { ProjetoCadastrar } from './projetos/projeto-cadastrar/projeto-cadastrar';
import { RelatorioFinanceiroCadastrar } from './relatorios-financeiros/relatorio-financeiro-cadastrar/relatorio-financeiro-cadastrar';
import { RelatorioFinanceiroListar } from './relatorios-financeiros/relatorio-financeiro-listar/relatorio-financeiro-listar';
import { RelatorioFinanceiroEditar } from './relatorios-financeiros/relatorio-financeiro-editar/relatorio-financeiro-editar';
import { EventoCadastrar } from './eventos/evento-cadastrar/evento-cadastrar';
import { EventoListar } from './eventos/evento-listar/evento-listar';
import { EventoEditar } from './eventos/evento-editar/evento-editar';


export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar },

    { path: "projetos/cadastrar", loadComponent: () => ProjetoCadastrar},
    { path: "projetos", loadComponent: () => ProjetoListar},
    { path: "projetos/editar/:id", loadComponent: () => ProjetoEditar},

    { path: "relatorios-financeiros/cadastrar", loadComponent: () => RelatorioFinanceiroCadastrar},
    { path: "relatorios-financeiros", loadComponent: () => RelatorioFinanceiroListar},
    { path: "relatorios-Financeiros/editar/:id", loadComponent: () => RelatorioFinanceiroEditar},

    { path: "eventos/cadastrar", loadComponent: () => EventoCadastrar},
    { path: "eventos", loadComponent: () => EventoListar},
    { path: "eventos/editar", loadComponent: () => EventoEditar},
];
