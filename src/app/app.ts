import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterModule,ReactiveFormsModule]

})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      alert('Login successful!');
      // Pass form data to formup page (optional: use a service or state)
      this.router.navigate(['/formup'], { state: { data: this.myForm.value } });
    }
  }
}