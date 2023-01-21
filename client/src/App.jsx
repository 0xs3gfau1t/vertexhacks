import { Provider } from "react-redux"
import { store } from "./redux/store"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import "./App.css"
import {
} from "./pages"
import { PrivateRoute } from "./components/common"

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
