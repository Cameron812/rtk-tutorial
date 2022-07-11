import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts"
    })
  })
});

//use+Capitalize<name of endpoints>+ type of endpoints: query/mutation
export const { useGetPostsQuery } = apiSlice;
