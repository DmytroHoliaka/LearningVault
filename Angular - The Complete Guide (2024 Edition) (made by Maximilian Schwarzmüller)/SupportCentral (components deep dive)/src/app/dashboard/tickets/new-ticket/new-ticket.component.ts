import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit, output,
  TemplateRef,
  viewChild,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";
import {NewTicket, Ticket} from "../ticket.model";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  private form = viewChild<ElementRef<HTMLFormElement>>('formVariable');
  enteredTitle = '';
  enteredText = '';

  add = output<NewTicket>();

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form()?.nativeElement ?? "NULL");
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form()?.nativeElement ?? "NULL");
  }

  onSubmit(): void {
    this.add.emit({title: this.enteredTitle, text: this.enteredText,});
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
