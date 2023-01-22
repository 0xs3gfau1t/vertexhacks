const DestCard = ({ image }) => {
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
						Card title
					</h5>
					<p className="text-gray-700 text-base mb-4">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<p className="text-gray-600 text-xs flex flex-col gap-4">
						Last updated 3 mins ago
						<button
							type="button"
							class="w-1/2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Book Now
						</button>
					</p>
				</div>
			</div>
		</div>
	)
}

export default DestCard
