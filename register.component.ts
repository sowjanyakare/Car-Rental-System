// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarserviceService,  // ✅ Inject service correctly
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  onSubmit() {
    if (this.form.valid) {
      const userData = {
        name: this.name?.value,
        email: this.email?.value,
        phone: this.phone?.value,
        password: this.password?.value
      };

      this.carService.addUser(userData).subscribe(() => {
        console.log('User saved to db.json successfully!');
        this.router.navigate(['/login']);
      });
    }
  }
}
