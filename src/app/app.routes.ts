import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change detection ',
        loadComponent: () =>
          import(
            './dashboard/pages/chagen-detection/chagen-detection.component'
          ).then((c) => c.ChagenDetectionComponent),
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component').then(
            (c) => c.ControlFlowComponent
          ),
      },
      {
        path: 'defer-option',
        title: 'Defer option',
        loadComponent: () =>
          import('./dashboard/pages/defer-option/defer-option.component').then(
            (c) => c.DeferOptionComponent
          ),
      },
      {
        path: 'defer-views',
        title: 'Defer views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component').then(
            (c) => c.DeferViewsComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component').then(
            (c) => c.UserComponent
          ),
      },
      {
        path: 'users-list',
        title: 'Users',
        loadComponent: () =>
          import('./dashboard/pages/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
      {
        path: 'view-transition',
        title: 'View transition',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition.component'
          ).then((c) => c.ViewTransitionComponent),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
