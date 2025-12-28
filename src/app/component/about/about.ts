import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardTitle, MatCardContent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
