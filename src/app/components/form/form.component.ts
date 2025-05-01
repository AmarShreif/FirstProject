import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoolesheetService } from '../../goolesheet.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private googlesheet: GoolesheetService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: [undefined, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  onSubmit() {

    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const data = this.contactForm.value
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('specialization', data.specialization);
      formData.append('description', data.description);

      this.googlesheet.sendData(formData).subscribe(
        (res) => {
          Swal.fire({
            icon: "success",
            text: "شكراً لك! تم إرسال النموذج بنجاح.",
          });
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        (err) => {
          Swal.fire({
            icon: "error",
            text: "عذرًا، حدث خطأ أثناء الإرسال.",
          });
          this.isSubmitting = false;
        }
      );
    }
  }
}
