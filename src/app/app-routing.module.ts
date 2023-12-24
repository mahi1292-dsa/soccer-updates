import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/soccer-teams', pathMatch: 'full' },
  {
    path: 'soccer-teams',
    loadChildren: async () => (await import('./home/home.module')).HomeModule,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
