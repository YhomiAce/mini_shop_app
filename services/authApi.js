import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          ...payload,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
