import { createSlice } from "@reduxjs/toolkit"

import { login, verifylogin } from "../actions/auth"

const initialState = { verifying: false, isAuthenticated: false }

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.verifying = true
		})
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.isAuthenticated = payload.isAuthenticated
			state.verifying = false
		})
		builder.addCase(verifylogin.pending, state => {
			state.verifying = true
		})
		builder.addCase(verifylogin.fulfilled, (state, { payload }) => {
			state.isAuthenticated = payload.isAuthenticated
			state.verifying = false
		})
	},
})

export default authSlice.reducer
