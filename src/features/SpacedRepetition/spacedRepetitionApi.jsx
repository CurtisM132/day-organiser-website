import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const spacedRepetitionApi = createApi({
  reducerPath: 'spacedRepetitionApi',
  // TODO: Get host and port dynamically
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:44350/spaced-repetition/' }),
  endpoints: (builder) => ({
    getSpacedRepetitionRecords: builder.query({
      query: () => ``,
    }),
    createSpacedRepetitionRecord: builder.query({
      query: (record) => ({
        // TODO: Validate record
        url: `/${record.name}`,
        method: "POST",
        body: record,
      }),
    }),
    updateSpacedRepetitionRecord: builder.mutation({
      query: (record) => ({
        // TODO: Validate record
        url: `/${record.name}`,
        method: "PUT",
        body: record,
      }),
    }),
  }),
})

export const { useGetSpacedRepetitionRecordsQuery } = spacedRepetitionApi;
