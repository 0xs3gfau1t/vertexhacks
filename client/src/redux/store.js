import { configureStore } from "@reduxjs/toolkit"

import misc from "./reducers/misc"
import auth from "./reducers/auth"

import listenSock, { wsMiddleware } from "./sockMid"

export const store = configureStore({
	reducer: {
		misc: misc,
		auth: auth,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([wsMiddleware])
	},
})

listenSock(store)
