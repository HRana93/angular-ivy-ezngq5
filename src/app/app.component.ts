// app.component.ts

import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form Validation Tutorial';
   angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       firstName: ['', Validators.required ],
       email: ['', Validators.required ],
       lastName: ['', Validators.required ],
       Male: ['', Validators.required ],
       Female: ['', Validators.required ],
       search: ['', Validators.required ],
       address: ['', Validators.required ],
       male: ['', Validators.required ],
       female: ['', Validators.required ]
    });
  }
}
