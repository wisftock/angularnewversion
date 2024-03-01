import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
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
