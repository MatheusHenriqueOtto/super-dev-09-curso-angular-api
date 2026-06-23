import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';
import { ProjetoListar } from './projetos/projeto-listar/projeto-listar';
import { ProjetoEditar } from './projetos/projeto-editar/projeto-editar';
import { ProjetoCadastrar } from './projetos/projeto-cadastrar/projeto-cadastrar';

export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar },

    { path: "projetos/cadastrar", loadComponent: () => ProjetoCadastrar},
    { path: "projetos", loadComponent: () => ProjetoListar},
    { path: "projetos/editar/:id", loadComponent: () => ProjetoEditar},
];
