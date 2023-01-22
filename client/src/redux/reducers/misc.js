import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	isLoading: false,
}

const miscSlice = createSlice({
	name: "misc",
	initialState,
	reducers: {},
})

export default miscSlice.reducer
