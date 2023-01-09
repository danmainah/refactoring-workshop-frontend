import { createSlice } from "@reduxjs/toolkit"

export const authRedux = createSlice({
    name: "auth",
    initialState: { authenticated: true },
    reducers: {
      login(state) {
        state.authenticated = true
      },
      logout(state) {
        state.authenticated = false
      },
    },
  })
  
export const authActions = authRedux.actions