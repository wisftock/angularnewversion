import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public tecnologia = signal(['react', 'angular', 'vue', 'qwit']);
  public tecnologia2 = signal([]);

  public toggleContent() {
    this.showContent.update((item) => !item);
  }
}
