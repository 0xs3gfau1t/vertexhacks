import { Provider } from "react-redux"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { store } from "./redux/store"
import "./App.css"

import { Landing, Login, Home, Guide } from "./pages"
import { PrivateRoute } from "./components"

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/register"
						element={<Login register={true} />}
					/>
					<Route
						path="/home"
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route
						path="/guide"
						element={
							<PrivateRoute>
								<Guide />
							</PrivateRoute>
						}
					/>
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
