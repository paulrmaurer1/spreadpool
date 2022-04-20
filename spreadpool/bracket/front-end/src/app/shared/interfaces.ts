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
  paid: boolean;
  gm_updates: boolean;
}

export interface TBracketData {
	id: number;
	name: string;
  entry_count: number;
}

export interface EntryData {
  id: number;
  orig_team_a: string;
  orig_team_a_id: number;
  orig_team_b: string;
  orig_team_b_id: number;
  orig_team_c: string;
  orig_team_c_id: number;
  orig_team_d: string;
  orig_team_d_id: number;
  team_a: string;
  team_a_id: number;
  team_b: string;
  team_b_id: number;
  team_c: string;
  team_c_id: number;
  team_d: string;
  team_d_id: number;
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

export interface EntryStandingsData {
  id: number;
  tbracket: string;
  tbracket_id: number;
  player: string;
  player_id: number;
  team_count: number;
  team_a: string;
  team_b: string;
  team_c: string;
  team_d: string;
  team_a_status: string;
  team_b_status: string;
  team_c_status: string;
  team_d_status: string;
  standing_points: number
}

export interface EntryMyTeamsData {
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
  next_team_a: string;
  next_team_b: string;
  next_team_c: string;
  next_team_d: string;
  region_a: number;
  region_b: number;
  region_c: number;
  region_d: number;
}

export interface GameData {
  id: number;
  region: string;
  region_id: number;
  t_round: number;
  team1: string;
  team2: string;
  team1_id: number;
  team2_id: number;
  spread: number;
  team1_score: number;
  team2_score: number;
  tipoff_date_time: string;
  tipoff_date: string;
  tipoff_time: string;
}

// ***Deprecated in favor of NewGameWithOwnerData***
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

export interface NewGameWithOwnerData {
  id: number;
  region_id: number;
  tbracket_id: number;
  team1_owner: string;
  team1_owner_id: number;
  team2_owner: string;
  team2_owner_id: number;
  winner: string;
}

export interface MatchupData {
  id: number;
  tbracket: number;
  game: number;
  winner: number;
  team1_owner: string;
  team2_owner: string;
  team1_owner_id: number;
  team2_owner_id: number;
}

export interface MatchupLastGameData {
  id: number;
  tbracket: number;
  game: number;
  winner: number;
  team1_owner: string;
  team2_owner: string;
  team1_owner_id: number;
  team2_owner_id: number;
  spread: number;
  region_id: number;
  t_round: number;
  team1: string;
  team1_id: number;
  team2: string;
  team2_id: number;
}

export interface RegionData {
  id: number;
  name: string;
}