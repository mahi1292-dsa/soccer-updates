import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoccerLeaguesComponent } from './components/soccer-leagues/soccer-leagues.component';
import { SoccerTeamDetailComponent } from './components/soccer-team-detail/soccer-team-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SoccerLeaguesComponent, SoccerTeamDetailComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
