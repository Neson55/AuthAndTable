import { createSlice } from "@reduxjs/toolkit"
import { loginApi } from "../../app/services/loginApi"

interface InitialState {    
  token?: string
}

const initialState: InitialState = { 
}

const slice = createSlice({
  name: "token",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addMatcher(loginApi.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.data.access_token
      })
  },
})

export default slice.reducer
