import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition2',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition2.component.html',
})
export class ViewTransitionComponent2 {}
