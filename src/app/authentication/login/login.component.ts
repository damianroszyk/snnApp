import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, TokenResponse } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  credentialsError: boolean;

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      updateOn: 'blur'
    });
  }

  login(): void {
    const form = this.form.value;
    this.auth.login(form).subscribe(
      (response: TokenResponse) => this.performLogin(response),
      error => this.credentialsError = true
    );
  }

  performLogin(response: TokenResponse): void {
    this.credentialsError = false;

    this.auth.setToken(response);

    this.router.navigate(['/products']);
  }

}
