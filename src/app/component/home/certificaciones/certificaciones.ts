import {Component, HostListener} from '@angular/core';
import {Cert} from '../../../model/cert';
import {CertificatesService} from '../../../services/cert-service';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-certificaciones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './certificaciones.html',
  styleUrls: ['./certificaciones.css']
})
export class Certificaciones {

  certificados: Cert[] = [];
  query = '';
  showInfo = false;

  selectedId = '';

  constructor(private certSvc: CertificatesService) {
    this.certificados = this.certSvc.getAll();
    this.selectedId = this.certificados[0]?.id ?? '';
  }

  get selected(): Cert | undefined {
    return this.certificados.find(c => c.id === this.selectedId);
  }

  get filtrados(): Cert[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.certificados;

    return this.certificados.filter(c => {
      const text = `${c.nombre} ${c.issuer ?? ''} ${(c.tags ?? []).join(' ')}`.toLowerCase();
      return text.includes(q);
    });
  }

  onQueryChange(v: string) {
    this.query = v;
    const list = this.filtrados;
    if (list.length) this.selectedId = list[0].id;
  }

  setSelected(id: string) {
    this.selectedId = id;
  }

  prev() {
    const list = this.filtrados.length ? this.filtrados : this.certificados;
    if (!list.length) return;
    const idx = list.findIndex(c => c.id === this.selectedId);
    this.selectedId = list[(idx - 1 + list.length) % list.length].id;
  }

  next() {
    const list = this.filtrados.length ? this.filtrados : this.certificados;
    if (!list.length) return;
    const idx = list.findIndex(c => c.id === this.selectedId);
    this.selectedId = list[(idx + 1) % list.length].id;
  }

  openInfo(id: string) {
    this.selectedId = id;
    this.showInfo = true;
  }

  closeInfo() {
    this.showInfo = false;
  }

  openCredential(url: string) {
    window.open(url, '_blank', 'noreferrer');
  }

  showPreview = false;

  openPreview() {
    this.showPreview = true;
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closePreview() {
    this.showPreview = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.showPreview) this.closePreview();
    if (this.showInfo) this.closeInfo();
  }
}
