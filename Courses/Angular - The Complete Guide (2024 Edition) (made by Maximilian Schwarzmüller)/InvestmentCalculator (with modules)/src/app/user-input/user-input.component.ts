import {Component, inject, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investmentService = inject(InvestmentService)

  enteredInitialInvestment = signal('1000');
  enteredAnnualInvestment = signal('100');
  enteredExpectedReturn = signal('50');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
  }
}
