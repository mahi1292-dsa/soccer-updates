import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerTeamDetailComponent } from './components/soccer-team-detail/soccer-team-detail.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':teamCode', component: SoccerTeamDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
