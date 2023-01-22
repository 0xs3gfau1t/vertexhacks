import { Link } from "react-router-dom"

const Logo = ({ small }) => {
	return (
		<Link to={"/"}>
			<img
				src={"/src/assets/exploreMateLogo.png"}
				className={"h-12 w-auto"}
			/>
		</Link>
	)
}

export default Logo
