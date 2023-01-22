import { Provider } from "react-redux"
import { useSelector } from "react-redux"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Landing, Login, Home, Guide, Contribute, GuideView } from "./pages"
import { PrivateRoute, Alert } from "./components"
import "./App.css"

<<<<<<< Updated upstream
=======
import { Landing, Login, Home } from "./pages"
import { PrivateRoute } from "./components"

>>>>>>> Stashed changes
function App() {
	const misc = useSelector(state => state.misc)

	return (
<<<<<<< Updated upstream
		<Router>
			{misc.showAlert && <Alert />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Login register={true} />} />
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
				<Route
					path="/contribute"
					element={
						<PrivateRoute>
							<Contribute />
						</PrivateRoute>
					}
				/>
				<Route
					path="/meguide"
					element={
						<PrivateRoute>
							<GuideView />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
=======
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
				</Routes>
			</Router>
		</Provider>
>>>>>>> Stashed changes
	)
}

export default App
