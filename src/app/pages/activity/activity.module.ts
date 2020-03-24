import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActivityComponent } from './activity.component';

@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ActivityComponent }
    ])
  ]
})
export class ActivityModule { }
