import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedButtonComponent } from '../../shared/animated-button/animated-button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule, AnimatedButtonComponent, CommonModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  constructor(public router: Router) {}

  isChecked = false;
  formSubmitted = false;
  emailSent = false;

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  mailTest = false;

  http = inject(HttpClient);
  post = {
    endPoint: 'https://robert-pap.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.invalid) {
      Object.keys(ngForm.controls).forEach((key) => {
        const control = ngForm.controls[key];
        control.markAsTouched(); 
      });
    }

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), {
        headers: { 'Content-Type': 'text/plain' },
        responseType: 'text'
      }).subscribe({
        next: () => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.info('send post complete');
          this.emailSentMsg();
          ngForm.resetForm();
          this.formSubmitted = false;
        },
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.emailSentMsg();
      this.formSubmitted = false;
    }
  }

  emailSentMsg() {
    this.emailSent = true;
    
    setTimeout(() => {
      this.emailSent = false;
    }, 5000);

  }
}
