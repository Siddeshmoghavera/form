import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formup',
  templateUrl: './formup.html',
  styleUrls: ['./formup.css']
})
export class FormupComponent {

  data: any;

  constructor(private router: Router) {
    // src/app/formup/formup.ts

    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];

  }
}