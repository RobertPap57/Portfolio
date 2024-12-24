import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedButtonComponent } from '../../shared/animated-button/animated-button.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule, AnimatedButtonComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  isChecked = false;
  formSubmitted = false;
  emailSent = false;

  contactData = {
    name: '',
    email: '',
    message: ''
  }



  mailTest = true;
  http = inject(HttpClient);
  post = {
    endPoint: 'https://robert-pap.de/portfolio/sendMail.php',
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
      // Iterate over controls with proper typing
      Object.keys(ngForm.controls).forEach((key) => {
        const control = ngForm.controls[key];
        control.markAsTouched(); // Mark each control as touched
      });
    }

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), {
        headers: { 'Content-Type': 'text/plain' },
        responseType: 'text'
      }).subscribe({
        next: (response) => {
          console.log(response);
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.info('send post complete');
          this.emailSentMsg();
        },
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('this is a test', this.contactData);
      ngForm.resetForm();
      this.emailSentMsg();
      this.formSubmitted = false;
    }
    else if (ngForm.submitted && this.mailTest) {
      console.log('not valid', this.contactData);
    }
  }

  emailSentMsg() {
    this.emailSent = true;
    console.log(this.emailSent);
    
    setTimeout(() => {
      this.emailSent = false;
      console.log(this.emailSent);
    }, 5000);

  }
}
