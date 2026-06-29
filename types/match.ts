export interface Match {
    id: string;

    seasonId: string;
    tournamentId: string;

    stageId?: string | null;
    groupId?: string | null;

    roundId: string;

    teamSeasonToTournamentSeasonHomeId: string;
    teamSeasonToTournamentSeasonGuestId: string;

    date: string;
    time: string;

    stadiumId?: string | null;

    referee1Id?: string | null;
    referee2Id?: string | null;

    coachHomeId?: string | null;
    coachGuestId?: string | null;

    fullMatchLink1?: string | null;
    fullMatchLink2?: string | null;

    hostScore?: number | null;
    guestScore?: number | null;
}
export interface CreateMatchDto {
    seasonId: string;
    tournamentId: string;

    stageId?: string | null;
    groupId?: string | null;

    roundId: string;

    teamSeasonToTournamentSeasonHomeId: string;
    teamSeasonToTournamentSeasonGuestId: string;

    date: string;
    time: string;

    stadiumId?: string | null;

    referee1Id?: string | null;
    referee2Id?: string | null;

    coachHomeId?: string | null;
    coachGuestId?: string | null;

    fullMatchLink1?: string | null;
    fullMatchLink2?: string | null;

    hostScore?: number | null;
    guestScore?: number | null;
}
export interface UpdateMatchDto {
    seasonId?: string;
    tournamentId?: string;

    stageId?: string | null;
    groupId?: string | null;

    roundId?: string;

    teamSeasonToTournamentSeasonHomeId?: string;
    teamSeasonToTournamentSeasonGuestId?: string;

    date?: string;
    time?: string;

    stadiumId?: string | null;

    referee1Id?: string | null;
    referee2Id?: string | null;

    coachHomeId?: string | null;
    coachGuestId?: string | null;

    fullMatchLink1?: string | null;
    fullMatchLink2?: string | null;

    hostScore?: number | null;
    guestScore?: number | null;
}
export interface MatchSearchParams {
    q?: string;

    seasonId?: string;
    tournamentId?: string;

    stageId?: string;
    groupId?: string;
    roundId?: string;

    teamSeasonToTournamentSeasonHomeId?: string;
    teamSeasonToTournamentSeasonGuestId?: string;

    stadiumId?: string;

    referee1Id?: string;
    referee2Id?: string;

    coachHomeId?: string;
    coachGuestId?: string;

    fullMatchLink1?: string;
    fullMatchLink2?: string;

    time?: string;

    hostScore?: number;
    guestScore?: number;
}