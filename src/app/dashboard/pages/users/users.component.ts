import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@service/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public userService = inject(UserService);
}
