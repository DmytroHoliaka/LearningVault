import {Component, input, ViewEncapsulation} from '@angular/core';

interface Image {
  src: string,
  alt: string,
}

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    'class': 'dashboard-item'
  },
})
export class DashboardItemComponent {
  // @Input({required: true}) image!: Image;
  // @Input({required: true}) title!: string;
  image = input.required<Image>();
  title = input.required<string>();
}
