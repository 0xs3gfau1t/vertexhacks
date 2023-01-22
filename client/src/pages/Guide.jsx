import { MdFilterAlt } from "react-icons/md"

import { GuideCard } from "../components"

const Guide = () => {
	return (
		<div className="flex flex-col gap-4 mx-auto w-fit">
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
				<GuideCard />
				<GuideCard />
			</div>
			<div className="flex gap-4">
				<GuideCard />
				<GuideCard />
			</div>
		</div>
	)
}

export default Guide
