export interface IUserData {
  id: number;
  url: string;
  username: string;
  email: string;
  full_name: string;
  first_name: string;
  last_name: string;
  num_entries: number;
  mult_entry_type: string;
  is_staff: number;
}

export interface TBracketData {
	id: number;
	name: string;
  entry_count: number;
}

export interface EntryData {
  id: number;
  orig_team_a: string;
  orig_team_b: string;
  orig_team_c: string;
  orig_team_d: string;
  team_a: string;
  team_b: string;
  team_c: string;
  team_d: string;
  player: string;
  tbracket: number;
  tbracket_id: number;
}

export interface EntryBracketData {
  id: number;
  tbracket: number;
  player: number;
}

export interface EntryNameData {
  id: number;
  player: string;
  e_name: string;
  tbracket: number;
}

export interface GameData {
  id: number;
  region: string;
  t_round: number;
  team1: string;
  team2: string;
  team1_id: number;
  team2_id: number;
  spread: number;
  team1_score: number;
  team2_score: number;
}

export interface GameWithOwnerData {
  id: number;
  region: string;
  team1: string;
  team2: string;
  team1_id: number;
  team2_id: number;
  team1_owner: object[];
  team2_owner: object[];
}

export interface MatchupData {
  id: number;
  tbracket: number;
  game: number;
  winner: number;
  team1_owner: string;
  team2_owner: string;
}