import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "freeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});
export const { useGetAllCustomersQuery } = apiSlice;
