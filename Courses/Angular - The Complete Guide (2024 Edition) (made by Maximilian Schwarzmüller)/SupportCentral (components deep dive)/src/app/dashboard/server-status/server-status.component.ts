import {AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  private DestroyRef = inject(DestroyRef);
  currentStatus = signal<ServerStatus>('online');
  value = effect(() => console.log(this.currentStatus()));

  constructor() {

  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 50000000);

    this.DestroyRef.onDestroy(() => clearInterval(interval));
  }

  ngAfterViewInit(): void {
    this.DestroyRef.onDestroy(() => {
      return null;
    });
  }
}
