import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailingPageComponent } from './failing-page/failing-page.component';
import { SwitchPageComponent } from './switch-page/switch-page.component';

const routes: Routes = [{
  path: 'fail',
  component: FailingPageComponent
}, {
  path: 'switch',
  component: SwitchPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
