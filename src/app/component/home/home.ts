import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatDialogModule,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton,
    RouterLink,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router, private dialog: MatDialog) {}

  goAudit(): void {
    this.router.navigate(['/home/auditoria']);
  }

  openMap(): void {
    window.open(
      'https://www.google.com/maps?q=-12.0977,-77.0370&z=15',
      '_blank'
    );
  }
}
