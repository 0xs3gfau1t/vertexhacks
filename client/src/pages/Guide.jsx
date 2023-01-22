import { useState } from "react"
import { MdFilterAlt } from "react-icons/md"
import { useDispatch } from "react-redux"

import { reqBid } from "../redux/reducers/bid"
import { GuideCard, Popup } from "../components"

const Guide = () => {
	const [bid, setBid] = useState(false)
	const dispatch = useDispatch()

	const handleBid = () => {
		dispatch(reqBid(0))
	}

	return (
		<div className="flex flex-col gap-4 mx-auto w-fit">
			{bid && (
				<Popup title={"Place a bid."} setShow={setBid}>
					<div className="flex gap-8">
						<button
							className="button bg-green-600 text-white"
							onClick={handleBid}
						>
							Yes
						</button>
						<button
							className="button  bg-red-600 text-white"
							onClick={e => setBid(false)}
						>
							No
						</button>
					</div>
				</Popup>
			)}
			<h1 className="text-xl text-center">
				Hire a guide to assist your adventure.
			</h1>
			<div className="flex gap-2 mx-auto ">
				<button className=" bg-gray-300 flex px-2 rounded-md">
					Filter <MdFilterAlt className="text-2xl" />
				</button>

				<input
					placeholder="Search for guide"
					className="border-2 border-slate-500 rounded-md px-2"
				/>
			</div>
			<div className="flex gap-4">
				<GuideCard setFunc={setBid} />
				<GuideCard setFunc={setBid} />
			</div>
			<div className="flex gap-4">
				<GuideCard setFunc={setBid} />
				<GuideCard setFunc={setBid} />
			</div>
		</div>
	)
}

export default Guide
