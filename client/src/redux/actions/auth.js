import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

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
		console.log("here", response)
		if (!response) return { success: false }
		return { success: true, data: response }
	}
)
