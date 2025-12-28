import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {AuditItem} from '../../../model/auditoriamodel';
import {AUDIT_ITEMS} from '../../../services/auditoria-services';

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './auditoria.html',
  styleUrl: './auditoria.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditoriaComponent {
  items: AuditItem[] = [...AUDIT_ITEMS].sort((a, b) => (a.iso < b.iso ? 1 : -1));

  formatDate(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleString('es-PE', {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
