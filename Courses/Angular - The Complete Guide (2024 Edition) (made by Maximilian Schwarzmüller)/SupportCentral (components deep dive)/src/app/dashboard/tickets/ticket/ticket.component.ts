import {Component, input, Output, output, signal} from '@angular/core';
import {Ticket} from "../ticket.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();

  close = output<void>();
  detailsVisible = signal<boolean>(false);

  onToggleDetails() {
    this.detailsVisible.update(wasVisible => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
