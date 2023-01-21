import { useState } from "react"
import { Link } from "react-router-dom"

import { Logo, FormText } from "../components"

const initialState = {
	email: "",
	password: "",
}

const Login = () => {
	const [values, setValues] = useState(initialState)
	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const onSubmit = e => {
		e.preventDefault()
	}

	return (
		<div className="center-xy p-6 md:p-0">
			<div className="box1">
				<div className="flex flex-col ml-4 md:gap-2">
					<Logo small={false} full={true} />
					<h1 className="text-2xl md:text-3xl font-bold text-center py-2">
						"Login"
					</h1>
				</div>
				<form onSubmit={onSubmit} className="flex flex-col mx-4 mt-4">
					<FormText
						type={"email"}
						name={"email"}
						value={values.email}
						labelText={"Email"}
						handleChange={handleChange}
					/>

					<FormText
						name="password"
						type="password"
						labelText="Password"
						value={values.password1}
						handleChange={handleChange}
					/>

					<button className="button button1 bg-red-600" type="submit">
						"Login"
					</button>
				</form>
				<span className="mt-2 text-center">
					Already have an account?
					<Link to={"/register"} className="font-semibold">
						Register
					</Link>
				</span>
			</div>
		</div>
	)
}

export default Login
