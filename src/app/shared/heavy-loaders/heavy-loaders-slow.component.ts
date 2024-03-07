import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heavy-loaders-slow.component.html',
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 2000) {
      console.log('bloqueando javascript');
    }
    console.log('Heavy loaders slow component');
  }
}
