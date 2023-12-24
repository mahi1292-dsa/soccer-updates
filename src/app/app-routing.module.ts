import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerLeaguesComponent } from './components/soccer-leagues/soccer-leagues.component';

const routes: Routes = [
  { path: '', redirectTo: '/soccer-teams', pathMatch: 'full' },
  { path: 'soccer-teams', component: SoccerLeaguesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
