import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  public menuItems = routes
    .map((items) => items.children ?? [])
    .flat()
    .filter((route) => route.path)
    .filter((route) => !route.path?.includes(':'));
  constructor() {}
}
