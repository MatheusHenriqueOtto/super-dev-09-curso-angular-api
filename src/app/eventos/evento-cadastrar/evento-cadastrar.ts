import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { EventoModel } from '../../models/evento.model';

@Component({
  selector: 'app-evento-cadastrar',
  imports: [FormsModule],
  templateUrl: './evento-cadastrar.html',
  styleUrl: './evento-cadastrar.scss',
})
export class EventoCadastrar {
  private readonly eventoService = inject(EventoService);
  private readonly router = inject(Router);

  evento = signal<EventoModel>({
    id: crypto.getRandomValues(new Uint32Array(1))[0],
    titulo: "",
    local: "",
    custo: null,
  })

  salvar(): void {
    this.eventoService.cadastrar(this.evento()).subscribe({
      next: () => {
        alert("Evento cadastrada com sucesso");
        this.router.navigate(["/evento"]);
      },
      error: erro => {
        console.error("Erro ao cadastrar tarefa: " + erro);
        alert("Ocorreu um erro ao cadastrar o evento");
      }
    })
  }
}
