import { baseApi } from "./baseApi";
import {
    Match,
    CreateMatchDto,
    UpdateMatchDto,
    MatchSearchParams,
} from "@/types/match";

export const matchesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // POST /matches
        createMatch: builder.mutation<Match, CreateMatchDto>({
            query: (body) => ({
                url: "/matches",
                method: "POST",
                body,
            }),
            invalidatesTags: ["MATCHES"],
        }),

        // GET /matches
        getMatches: builder.query<Match[], void>({
            query: () => "/matches",
            providesTags: ["MATCHES"],
        }),

        // GET /matches/search
        searchMatches: builder.query<Match[], MatchSearchParams>({
            query: (params) => ({
                url: "/matches/search",
                params,
            }),
            providesTags: ["MATCHES"],
        }),

        // GET /matches/{id}
        getMatchById: builder.query<Match, string>({
            query: (id) => `/matches/${id}`,
            providesTags: (_result, _error, id) => [
                { type: "MATCHES", id },
            ],
        }),

        // PATCH /matches/{id}
        updateMatch: builder.mutation<
            Match,
            { id: string; body: UpdateMatchDto }
        >({
            query: ({ id, body }) => ({
                url: `/matches/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["MATCHES"],
        }),

        // DELETE /matches/{id}
        deleteMatch: builder.mutation<void, string>({
            query: (id) => ({
                url: `/matches/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["MATCHES"],
        }),
    }),
});

export const {
    useCreateMatchMutation,
    useGetMatchesQuery,
    useSearchMatchesQuery,
    useGetMatchByIdQuery,
    useUpdateMatchMutation,
    useDeleteMatchMutation,
} = matchesApi;