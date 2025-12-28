import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navOpen = false;

  toggleNav() { this.navOpen = !this.navOpen; }
  closeNav() { this.navOpen = false; }

  // Extra: cerrar con Escape
  @HostListener('document:keydown.escape')
  onEsc() {
    this.closeNav();
  }
}
