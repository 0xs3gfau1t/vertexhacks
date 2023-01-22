import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const GuideView = () => {
	const auth = useSelector(state => state.auth)

	if (!auth.verifying && auth.user !== "guide") return <Navigate to="/" />

	return (
		<div>
			<h1 className="text-4xl">Guide views</h1>
		</div>
	)
}

export default GuideView
