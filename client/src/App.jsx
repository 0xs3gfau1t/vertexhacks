import { Provider } from "react-redux"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { store } from "./redux/store"
import "./App.css"

import { Landing, Login } from "./pages"
// import { PrivateRoute } from "./components/common"

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
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
