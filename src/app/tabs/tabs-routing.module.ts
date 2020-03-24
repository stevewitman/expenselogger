import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/account/account.module').then(m => m.AccountModule)
          }
        ]
      },
      {
        path: 'budget',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/budget/budget.module').then(m => m.BudgetModule)
          }
        ]
      },
      {
        path: 'activity',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/activity/activity.module').then(m => m.ActivityModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
