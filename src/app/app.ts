import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
   imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  //constructor(private router: Router) {}
  UserObj: any={
    Mobilenumber:' ',
    Relationship:' ',
    salutation:' ',
    Patientname:' ',
    PatientSurname:' ',
    Age:' ',
    DateofBirth:' ',
    Gender:' ',
    SelectionPrefix:' ',
    Relationname:' ',
    Alternatenumber:' ',
    Address:' ',
    Pincode:' ',
    city:' ',
    Email:' ',
  };

  today = new Date().toISOString().split('T')[0];

  onSubmit(form: any) {
  if (form.valid) {
    console.log('Form Submitted Successfully');
    console.log(this.UserObj);  // You can send this to API or display it
  } else {
    console.log('Form is invalid. Please fill all required fields correctly.');
  }
}


  }