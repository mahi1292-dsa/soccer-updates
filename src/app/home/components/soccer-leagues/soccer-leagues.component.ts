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
  public loader:boolean = false;
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
    this.loader = true;
    this.footballService.selectedLeague = { league: league, code: leagueCode };
    let data = localStorage.getItem(`${league}+${leagueCode}`);
    if (data) {
      this.soccerLeagues = JSON.parse(data);
      this.loader = false;
    } else {
      this.standingsSub = this.footballService
        .getStandings(league, leagueCode)
        .subscribe(
          (data: LeagueApiResponse) => {
            if (data && data.response && data.response.length > 0) {
              this.loader = false;
              this.soccerLeagues = data.response[0].league.standings[0];
              localStorage.setItem(`${league}+${leagueCode}`, JSON.stringify(this.soccerLeagues));//caching data in localStorage
            } else {
              console.error('Invalid API response.');
            }
          },
          (error: HttpErrorResponse) => {
            console.error('Error fetching data', error);
          }
        );
    }
    
  }

  getSoccerTeamData(leagueId: number): void { //dt:23-12
    this.router.navigate(['/soccer-teams', leagueId])
  }
  ngOnDestroy(): void {
    if (this.standingsSub) {
      this.standingsSub.unsubscribe();
    }
  }

}
