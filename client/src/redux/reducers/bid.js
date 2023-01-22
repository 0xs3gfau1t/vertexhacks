import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	bid: [],
	bidG: [],
}

const bidSlice = createSlice({
	name: "bid",
	initialState,
	reducers: {
		reqBid: (state, { payload }) => {
			state.bid = [...state.bid, { "guide": "Sita", "amount": 500 }]
		},
	},
})

export const { reqBid } = bidSlice.actions
export default bidSlice.reducer
