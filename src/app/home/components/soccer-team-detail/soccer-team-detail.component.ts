import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fixture, FixtureApiResponse } from 'src/app/models/soccer-fixture.model';
import { FootBallService } from 'src/app/services/foot-ball.service';

@Component({
  selector: 'app-soccer-team-detail',
  templateUrl: './soccer-team-detail.component.html',
  styleUrls: ['./soccer-team-detail.component.scss']
})
export class SoccerTeamDetailComponent implements OnInit {
  teamCode: number = 0;
  selectedLeague: string = '';
  fixtures: Fixture[] = [];
  public loader: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private footballService: FootBallService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamCode = +params['teamCode'];
      this.getTeamScores(this.teamCode);
    });
  }

  getTeamScores(teamNo: number) {
    this.loader = true;
    let data = localStorage.getItem(`detail+${teamNo}+2023`);
    if (data) {
      this.fixtures = JSON.parse(data);
      this.loader = false;
    } else {
      this.footballService
        .getTeamScoresOfTopTen(teamNo)
        .subscribe((data: FixtureApiResponse) => {
          this.fixtures = data.response;
          this.loader = false;
          localStorage.setItem(`detail+${teamNo}+2023`, JSON.stringify(this.fixtures));
          this.selectedLeague = this.fixtures[0].league.country.toLowerCase();
        });
    }

  }

  goToLeagueSelection(): void {
    this.router.navigate(['/soccer-teams']);
  }

}
