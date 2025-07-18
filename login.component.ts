import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm: FormGroup;
  msg: string = '';
  error1: string = '';
  loading: boolean = false;

  constructor(private router: Router, private carService: CarserviceService) {
    this.myForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  validate(): void {
    if (this.myForm.invalid) {
      this.loading = false;
      const userNameEmpty = this.myForm.get('userName')?.hasError('required');
      const passwordEmpty = this.myForm.get('password')?.hasError('required');

      if (userNameEmpty && passwordEmpty) {
        this.msg = 'Enter Username and Password';
      } else if (userNameEmpty) {
        this.msg = 'Enter Username';
      } else if (passwordEmpty) {
        this.msg = 'Enter Password';
      } else {
        this.msg = 'Please fix the form errors';
      }

      this.error1 = 'red';
      return;
    }

    this.loading = true;
    const { userName, password } = this.myForm.value;

    this.carService.getUsers().subscribe(users => {
      const user = users.find(u => u.name === userName && u.password === password);

      if (user) {
        this.msg = 'SUCCESSFULLY LOGIN';
        this.error1 = 'green';
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['dashboard']);
        }, 1000);
      } else {
        this.msg = 'INVALID USERNAME AND PASSWORD';
        this.error1 = 'red';
        this.loading = false;
      }
    
      this.myForm.reset();
    }, error => {
      this.msg = 'Server error. Please try again later.';
      this.error1 = 'red';
      this.loading = false;
    });
  }
}
