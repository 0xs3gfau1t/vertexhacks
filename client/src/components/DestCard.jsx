import { FaStarHalfAlt, FaStar } from "react-icons/fa"

const DestCard = ({ image, setFunc, setdet, title = "Title" }) => {
	return (
		<div className="flex justify-center border-2 rounded-lg">
			<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
				<img
					className="cursor-pointer w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={image}
					alt=""
					onClick={e => setdet(true)}
				/>
				<div className="p-6 flex flex-col justify-start gap-1">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{title}
					</h5>
					<p className="text-gray-700 text-base mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<div className="flex gap-4">
						<span>* Rs.300/night</span>
						<span>* 3 rooms available</span>
					</div>
					<div className="text-gray-600 text-xs flex flex-col gap-4">
						<div className="flex text-yellow-500 text-lg">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt />
						</div>
						<button
							className="button w-fit mx-auto bg-blue-700 text-white"
							onClick={e => setFunc(true)}
						>
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DestCard
