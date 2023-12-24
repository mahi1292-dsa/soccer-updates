import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerLeaguesComponent } from './components/soccer-leagues/soccer-leagues.component';
import { SoccerTeamDetailComponent } from './components/soccer-team-detail/soccer-team-detail.component';

const routes: Routes = [
    { path: '', component: SoccerLeaguesComponent },
    { path: ':teamCode', component: SoccerTeamDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
