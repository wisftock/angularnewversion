import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '@service/user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserId(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario - ${this.user()?.first_name}`;
    }
    return 'Información del usuario';
  });
}
