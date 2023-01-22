import { useState } from "react"
import { useDispatch } from "react-redux"
import { MdFilterAlt } from "react-icons/md"

import { DestCard, Popup, HomeDetail } from "../components"
import { bookHomeStay } from "../redux/actions/homestay"

const Home = () => {
	const [confirm, setConfirm] = useState(false)
	const [showDetail, setDetail] = useState(false)

	const dispatch = useDispatch()

	const handleConfirm = e => {
		dispatch(bookHomeStay(0))
		setConfirm(false)
	}

	return (
		<div className="flex flex-col mx-auto w-fit gap-4">
			{confirm && (
				<Popup title={"Confirm your booking?"} setShow={setConfirm}>
					<div className="flex gap-8">
						<button
							className="button bg-green-600 text-white"
							onClick={handleConfirm}
						>
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
			{showDetail && (
				<Popup title={"Details"} setShow={setDetail}>
					<HomeDetail />
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
					setdet={setDetail}
				/>
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
					setdet={setDetail}
				/>
			</div>
			<div className="flex gap-4">
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
					setdet={setDetail}
				/>
				<DestCard
					image={
						"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
					}
					setFunc={setConfirm}
					setdet={setDetail}
				/>
			</div>
		</div>
	)
}

export default Home
