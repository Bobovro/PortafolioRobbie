import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  protected readonly toEmail = 'robbiedulantot@gmail.com';

  readonly linkedinUrl = 'https://www.linkedin.com/in/robbie-dulanto/';
  readonly githubUrl = 'https://github.com/Bobovro';
  readonly cvUrl = 'assets/cv-robbie-dulanto.pdf';

  sending = false;
  sent = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(600)]],
    });
  }

  get nameCtrl() { return this.form.get('name'); }
  get emailCtrl() { return this.form.get('email'); }
  get messageCtrl() { return this.form.get('message'); }

  onSubmit(): void {
    this.sent = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;

    const name = (this.nameCtrl?.value ?? '').toString().trim();
    const email = (this.emailCtrl?.value ?? '').toString().trim();
    const message = (this.messageCtrl?.value ?? '').toString().trim();

    const subject = `Contacto Portafolio — ${name}`;
    const body =
      `Nombre: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}\n\n` +
      `— Enviado desde el portafolio`;

    const mailto =
      `mailto:${encodeURIComponent(this.toEmail)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailto;
      this.sending = false;
      this.sent = true;
    }, 250);
  }

  resetForm(): void {
    this.form.reset();
    this.sent = false;
  }
}
