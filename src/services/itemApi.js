import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
    reducerPath: "itemApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://www.api.technicaltest.quadtheoryltd.com/api/",
    }),

    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => "Item?page=1&pageSize=10",
        }),
    }),
});

export const { useGetItemsQuery } = itemApi;