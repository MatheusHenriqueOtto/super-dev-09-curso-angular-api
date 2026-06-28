import { Component, inject, signal } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { RouterLink } from '@angular/router';
import { EventoModel } from '../../models/evento.model';

@Component({
  selector: 'app-evento-listar',
  imports: [RouterLink],
  templateUrl: './evento-listar.html',
  styleUrl: './evento-listar.scss',
})
export class EventoListar {
  private readonly eventoService = inject(EventoService);
  
  eventos = signal<EventoModel[]>([]);

  ngOnInit() {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.eventoService.listar().subscribe({
      next: eventos => { 
        const eventosOrdenados = eventos.sort((x, y) => (x.titulo! || '').localeCompare(y.titulo! || ''));
        this.eventos.set(eventosOrdenados);
      }, 
      error: erro => {
        console.error("Erro ao carregar os eventos: " + erro)
        alert("Não foi possivel carregar os eventos")
      }
    })
  }
}
