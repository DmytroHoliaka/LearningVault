import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {debounceTime, EMPTY, Observable, of} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

function mustContainQuestionMark(control: AbstractControl):
  ValidationErrors | null {
  if (control.value.includes('?')) {
    return null;
  }

  return {doesNotContainQuestionMark: true};
}

function emailIsUnique(control: AbstractControl):
  (Promise<ValidationErrors | null> | Observable<ValidationErrors | null>) {
  if (control.value !== "test@example.com") {
    return of(null);
  }

  return of({notUnique: true});
}

let initialEmailValue = '';
const storedString = localStorage.getItem('saved-login-form');
if (storedString) {
  const storedObject = JSON.parse(storedString);
  initialEmailValue = storedObject.email;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    ReactiveFormsModule // flow
  ]
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(6), mustContainQuestionMark],),
  });

  get emailIsInvalid() {
    return this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid;
  }

  get passwordIsInvalid() {
    return this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid;
  }

  ngOnInit(): void {
    // const storedString = localStorage.getItem('saved-login-form');
    //
    // if (storedString) {
    //   const storedObject = JSON.parse(storedString);
    //   this.form.patchValue(storedObject);
    // }

    const subscription = this.form.valueChanges
      .pipe(
        debounceTime(500))
      .subscribe(
        (newValues) =>
          localStorage.setItem('saved-login-form', JSON.stringify({email: newValues.email}))
      );

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    console.log(this.form);
    console.log(email);
    console.log(password);
  }
}
