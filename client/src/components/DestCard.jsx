import { FaStarHalfAlt, FaStar } from "react-icons/fa"

const DestCard = ({ image, title = "Title	" }) => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
				<img
					className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={image}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{title}
					</h5>
					<p className="text-gray-700 text-base mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<div className="text-gray-600 text-xs flex flex-col gap-4">
						<div className="flex color-yellow-500">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt />
						</div>
						<button className="button w-fit mx-auto bg-blue-700 text-white">
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DestCard
