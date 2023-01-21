import React, { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { verifylogin } from "../redux/actions/auth"

import NavBar from "./NavBar"

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, verifying } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!isAuthenticated && !verifying) dispatch(verifylogin(true))
	}, [isAuthenticated])

	if (verifying) {
		return <h1>Loading</h1>
	}

	if (!verifying && !isAuthenticated) {
		console.log("You must login to continue")
		return <Navigate to="/" />
	}

	return (
		<>
			<NavBar />
			{children}
		</>
	)
}

export default PrivateRoute
