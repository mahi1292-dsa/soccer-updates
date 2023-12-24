import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FootBallService } from './services/foot-ball.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // selectedLeague: string = '';
  // constructor(private router: Router, private footballService:FootBallService) { }
  
  // getStandings(league: string, leagueCode: number) {
  //   this.selectedLeague = league;
  //   this.footballService.selectedLeague = { league: league, code: leagueCode };
  //   this.router.navigate(['soccer-teams']);
  // }
}


