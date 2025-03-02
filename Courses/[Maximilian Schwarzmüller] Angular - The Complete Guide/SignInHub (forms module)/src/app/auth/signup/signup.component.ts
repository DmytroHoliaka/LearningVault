import {Component} from '@angular/core';
import {
  AbstractControl,
  FormArray, FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";

type StudentType = 'student' | 'teacher' | 'employee' | 'founder' | 'other';

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const val1: string | undefined = control.get('password')?.value;
    const val2: string | undefined = control.get('confirmPassword')?.value;

    if (val1 === val2) {
      return null;
    }

    return {passwordNotEqual: true};
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [
    ReactiveFormsModule
  ]
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    passwords: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
    }, {
      validators: [equalValues('password', 'confirmPassword')]
    }),
    firstName: new FormControl('', {
      validators: [Validators.required]
    }),
    lastName: new FormControl('', {
      validators: [Validators.required]
    }),
    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required]
      }),
      number: new FormControl('', {
        validators: [Validators.required]
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required]
      }),
      city: new FormControl('', {
        validators: [Validators.required]
      }),
    }),
    role: new FormControl<StudentType>('student', {
      validators: [Validators.required]
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl<boolean>(false, {
      validators: [Validators.required]
    })
  });

  OnFormSubmit() {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }

    console.log(this.form);
  }

  OnFormReset() {
    this.form.reset();
  }
}
