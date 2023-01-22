import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { AiFillCaretDown, AiFillHome } from "react-icons/ai"
import { MdEmojiPeople } from "react-icons/md"
import { FaHandsHelping } from "react-icons/fa"

import { Logo } from "../components"
import { logout } from "../redux/actions/auth"

const NavBar = () => {
	const [show, setShow] = useState(false)
	const dispatch = useDispatch()
	const ref = useRef(null)
	const handleLogout = e => {
		console.log("Clicked")
		dispatch(logout(0))
	}
	return (
		<div className="flex h-max bg-slate-900 lg:px-8 rounded py-2 mb-2 text-white justify-items-center">
			<div className="w-4/5 lg:1/3">
				<Logo small={true} />
			</div>
			<div className="flex gap-8 w-1/2 lg:1/3 p-2 text-4xl lg:text-4xl">
				<NavLink
					className={({ isActive }) =>
						isActive
							? "border-rose-700 border-b-2 px-2 rounded-b"
							: "px-2"
					}
					to="/home"
				>
					<AiFillHome />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "border-rose-700 border-b-2 px-2 rounded-b"
							: "px-2"
					}
					to="/guide"
				>
					<MdEmojiPeople />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "border-rose-700 border-b-2 px-2 rounded-b"
							: "px-2"
					}
					to="/contribute"
				>
					<FaHandsHelping />
				</NavLink>
			</div>
			<div className="flex gap-8 w-1/5 my-auto pr-4 ml-24">
				<AiFillCaretDown
					className={`${
						show ? "rotate-180" : ""
					} text-xl lg:text-2xl transition-all cursor-pointer`}
					onClick={e => setShow(!show)}
				/>
				{show && (
					<>
						<div
							className="fixed inset-0 w-full h-full bg-black opacity-10"
							onClick={() => setShow(false)}
						></div>
						<ul
							ref={ref}
							className="header-drop absolute z-99 mt-32 p-2 w-36 text-center border-blue border-2 rounded-md font-bold bg-blue-900"
						>
							<Link to="/#">
								<li onClick={e => setShow(false)}>Settings</li>
							</Link>
							<hr className="w-11/12 border-neutral-300" />

							<li onClick={handleLogout}>Logout</li>
						</ul>
					</>
				)}
			</div>
		</div>
	)
}

export default NavBar
