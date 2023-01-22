import { useState } from "react"
import { MdFilterAlt } from "react-icons/md"

import { DestCard, Popup } from "../components"

const Home = () => {
	const [confirm, setConfirm] = useState(false)

	return (
		<div className="flex flex-col mx-auto w-fit gap-4">
			{confirm && (
				<Popup title={"Confirm your booking?"} setShow={setConfirm}>
					<div className="flex gap-8">
						<button className="button bg-green-600 text-white">
							Yes
						</button>
						<button
							className="button  bg-red-600 text-white"
							onClick={e => setConfirm(false)}
						>
							No
						</button>
					</div>
				</Popup>
			)}
			<h1 className="text-xl text-center">Top Home Stays for you</h1>
			<div className="flex gap-2 mx-auto ">
				<button className=" bg-gray-300 flex px-2 rounded-md">
					Filter <MdFilterAlt className="text-2xl" />
				</button>

				<input
					placeholder="Search homestays"
					className="border-2 border-slate-500 rounded-md px-2"
				/>
			</div>
			<div className="flex gap-4">
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
				/>
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
				/>
			</div>
			<div className="flex gap-4">
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
				/>
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
				/>
			</div>
		</div>
	)
}

export default Home
