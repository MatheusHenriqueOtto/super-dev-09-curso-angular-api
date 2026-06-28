import { NumberValueAccessor } from "@angular/forms";

export interface EventoModel {
    id: number | null;
    titulo: string;
    local: string;
    custo: number | null;
}