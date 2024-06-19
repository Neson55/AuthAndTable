import { api } from "./api"

export const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { data: { access_token: string } },
      { email: string; password: string; personal_data_access: boolean }
    >({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
})

export const {
  useLoginMutation
} = loginApi

export const {
  endpoints: { login },
} = loginApi

