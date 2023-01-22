import io, { Socket } from "socket.io-client"
import * as liveActions from "./actions/live"

const socket = io("/", {
	path: "/sock",
	autoConnect: false,
	withCredentials: true,
})

export function wsMiddleware() {
	return next => action => {
		if (action.type === "CONNECT" && !socket.connected) {
			socket.connect()
			console.log("Connecting to socket")
		}
		return next(action)
	}
}

export default function (store) {
	socket.on("bid", data => {
		console.log("bid")
	})
}
