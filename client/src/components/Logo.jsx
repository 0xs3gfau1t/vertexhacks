import { Link } from "react-router-dom"

const Logo = ({ small }) => {
	return (
		<Link to={"/"}>
			<img src={"#"} className={"h-min w-min"} />
		</Link>
	)
}

export default Logo
