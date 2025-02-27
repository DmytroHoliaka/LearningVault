import {
  AfterContentInit, afterNextRender, afterRender,
  Component, contentChild,
  ContentChild,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  private el = inject(ElementRef);
  label = input.required<string>();

  // @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement> | undefined;
  control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER');
    });

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }

  onClick() {
    console.log("Clicked!");
    console.log(this.el.nativeElement);
    console.log(this.control());
  }
}
