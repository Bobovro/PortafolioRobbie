import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';

  initTheme() {
    const saved = localStorage.getItem(this.key);
    if (saved) {
      document.documentElement.classList.toggle('light', saved === 'light');
      return;
    }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.classList.toggle('light', prefersLight);
  }

  toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem(this.key, isLight ? 'light' : 'dark');
  }
}
