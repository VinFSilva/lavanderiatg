import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue)
    this.http.post('http://localhost:4200/api/users', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }
}