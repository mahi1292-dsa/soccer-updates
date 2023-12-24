import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LeagueApiResponse } from '../models/soccer-league.model';

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
}
export interface selectedLeagueModal {
  league: string;
  code: number
}