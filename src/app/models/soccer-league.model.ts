export interface StandingsData {
    rank: number;
    team: {
      id: number;
      name: string;
      logo: string;
    };
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
    home: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
    away: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
    update: string;
  }
  
  export interface LeagueData {
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
      standings: StandingsData[][];
    };
  }
  
  export interface LeagueApiResponse {
    get: string;
    parameters: {
      league: string;
      season: string;
    };
    errors: string[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: LeagueData[];
  }
  