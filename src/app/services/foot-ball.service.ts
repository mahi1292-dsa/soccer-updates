import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LeagueApiResponse } from '../models/soccer-league.model';
import { FixtureApiResponse } from '../models/soccer-fixture.model';

@Injectable({
  providedIn: 'root',
})
export class FootBallService {
  private API = 'https://v3.football.api-sports.io';
  private readonly currentYear: number = new Date().getFullYear();

  selectedLeague: selectedLeagueModal = { league: '', code: 0 };

  constructor(private http: HttpClient) { }

  getStandings(
    league: string,
    leagueCode: number,
    season: string = this.currentYear.toString()
  ): Observable<LeagueApiResponse> {
    this.selectedLeague = { league: league, code: leagueCode };

    return this.http
      .get<LeagueApiResponse>(
        `${this.API}/standings?league=${leagueCode}&season=${season}`
 
        )
      .pipe(
        map((response: LeagueApiResponse) => {
          return response;
        })
      );
  }

  getTeamScoresOfTopTen(
    teamId: number,
    season: string = this.currentYear.toString()
  ): Observable<FixtureApiResponse> {
    return this.http
      .get(`${this.API}/fixtures?team=${teamId}&season=${season}&last=10`) as Observable<FixtureApiResponse>;
  }
}
export interface selectedLeagueModal {
  league: string;
  code: number
}