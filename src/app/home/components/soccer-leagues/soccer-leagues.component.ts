import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueApiResponse, StandingsData } from 'src/app/models/soccer-league.model';
import { FootBallService } from 'src/app/services/foot-ball.service';

@Component({
  selector: 'app-soccer-leagues',
  templateUrl: './soccer-leagues.component.html',
  styleUrls: ['./soccer-leagues.component.scss']
})
export class SoccerLeaguesComponent implements OnInit {

  public selectedLeague: string | null = null;
  public soccerLeagues: StandingsData[] = [];
  private standingsSub: Subscription = new Subscription;
  private selctedLeagueSub: Subscription = new Subscription;
  constructor(
    private footballService: FootBallService,
    private router: Router
  ) { }

  ngOnInit() {
    const leagueData = this.footballService.selectedLeague;
    if (leagueData?.code) {
      this.getStandings(leagueData?.league, leagueData?.code);
    }
  }

  getStandings(league: string, leagueCode: number) {
    this.selectedLeague = league;
    this.footballService.selectedLeague = { league: league, code: leagueCode };
    this.standingsSub = this.footballService
      .getStandings(league, leagueCode)
      .subscribe(
        (data: LeagueApiResponse) => {
          if (data && data.response && data.response.length > 0) {
            this.soccerLeagues = data.response[0].league.standings[0];
          } else {
            console.error('Invalid API response.');
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching data', error);
        }
      );
  }

  getSoccerTeamData(leagueId: number) { //dt:23-12
    this.router.navigate(['/soccer-teams', leagueId ? leagueId : 0])
  }
  ngOnDestroy(): void {
    if (this.standingsSub) {
      this.standingsSub.unsubscribe();
    }
    if(this.selctedLeagueSub){
      this.selctedLeagueSub.unsubscribe();
    }
  }

}
