import { useState } from "react"
import { Link } from "react-router-dom"

import { Logo, FormText } from "../components"

const initialState = {
	name: "",
	email: "",
	password1: "",
	password2: "",
}

const Login = ({ register }) => {
	const [values, setValues] = useState(initialState)

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const onSubmit = e => {
		e.preventDefault()
		let { email, password1, password2, name } = values
		if (!email || !password1 || !(!register || (password2 && name))) {
			console.log("One or more field missing!!", "danger")
			return
		}
		if (register && password1 !== password2) {
			console.log("Password didn't match.")
			return
		}
		if (register) console.log("Registered")
		console.log("Login")
	}
	return (
		<div className="center-xy p-6 md:p-0">
			<div className="box1">
				<div className="flex flex-col ml-4 md:gap-2">
					<Logo small={false} full={true} />
					<h1 className="text-2xl md:text-3xl font-bold text-center py-2">
						{register ? "Register" : "Login"}
					</h1>
				</div>
				<form onSubmit={onSubmit} className="flex flex-col mx-4 mt-4">
					{register && (
						<FormText
							name="name"
							type="text"
							labelText="Full Name"
							value={values.name}
							handleChange={handleChange}
						/>
					)}
					<FormText
						type={"email"}
						name={"email"}
						value={values.email}
						labelText={"Email"}
						handleChange={handleChange}
					/>

					<FormText
						name="password1"
						type="password"
						labelText="Password"
						value={values.password1}
						handleChange={handleChange}
					/>
					{register && (
						<FormText
							name="password2"
							type="password"
							labelText="Confirm Password"
							value={values.password2}
							handleChange={handleChange}
						/>
					)}
					<button className="button button1 bg-red-600" type="submit">
						{register ? "Register" : "Login"}
					</button>
				</form>
				<span className="mt-2 text-center">
					{register ? "Already have an account?" : "New here?"}
					<Link
						to={register ? "/login" : "/register"}
						className="font-semibold"
					>
						{register ? " Login" : " Register"}
					</Link>
				</span>
			</div>
		</div>
	)
}

export default Login
