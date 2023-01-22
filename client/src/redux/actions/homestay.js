import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { setAlert } from "./misc"

// /api/homestay/confirm

export const bookHomeStay = createAsyncThunk(
	"homestay/book",
	async ({}, { dispatch }) => {
		console.log("val")
		const response = await axios
			.post(`/api/homestay/confirm`, {
				homeStayId: "63cd127cbb950a1ebb3086bc",
			})
			.then(res => {
				console.log("Booked.")
				dispatch(setAlert("La book vayo!", "success"))
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
