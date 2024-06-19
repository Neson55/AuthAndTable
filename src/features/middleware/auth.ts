import { createListenerMiddleware } from "@reduxjs/toolkit"
import { loginApi } from "../../app/services/loginApi"

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: loginApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
    if (action.payload.data && action.payload.data.access_token) {
      localStorage.setItem("token", action.payload.data.access_token)
    }
  },
})