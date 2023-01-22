import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { connect } from "./live"

export const registerAc = createAsyncThunk(
	"auth/register",
	async ({ username, email, password1, password2 }, { dispatch }) => {
		console.log("Idhar")
		const response = await axios
			.post(`/api/auth/register`, {
				username: username,
				email: email,
				password: password1,
			})
			.then(res => {
				console("Account created!", "success", true)
				return res.data
			})
			.catch(err => {
				console.error(err.response.data.error)
			})

		if (!response) return { success: false }
		return { success: true, data: response }
	}
)

export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password1 }, { dispatch }) => {
		console.log("val")
		const response = await axios
			.post(`/api/auth/login`, {
				username: username,
				password: password1,
			})
			.then(res => {
				console.log("Logged in.")
				return res.data
			})
			.catch(err => {
				console.error(err.response)
				console.log("Something Went Wrong ! Try again later")
			})
		if (response.role === "tourist" || response.role === "guide")
			dispatch(connect())

		if (!response) return { isAuthenticated: false }
		return { isAuthenticated: true }
	}
)

export const verifylogin = createAsyncThunk(
	"auth/verfiylogin",
	async (alert, { dispatch }) => {
		const response = await axios
			.get("/api/auth/verifylogin", {
				withCredentials: true,
			})
			.then(res => {
				console.log("Login okay")
				return res.data
			})
			.catch(err => {
				if (alert) {
					dispatch(
						setAlert(
							err.response?.data?.error ||
								"You must login to continue !",
							"danger"
						)
					)
				}
				return false
			})

		// if (response.role === "tourist" || response.role === "guide")
		dispatch(connect())
		// console.log(response)
		if (response) return { isAuthenticated: true, user: response.user }

		return { isAuthenticated: false }
	}
)

export const logout = createAsyncThunk(
	"auth/logout",
	async ({}, { dispatch }) => {
		const response = await axios
			.delete("/api/auth/logout", {
				withCredentials: true,
			})
			.then(res => {
				console.log("Logged Out!", "success")
				// window.location.href = "/"
				return res.data
			})
			.catch(err => {
				if (alert) {
					console.log("Something went wrong !")
				}
				return false
			})
		return { isAuthenticated: false }
	}
)
