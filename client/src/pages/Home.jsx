import { DestCard } from "../components"

const Home = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-xl text-center">Top Home Stays for you</h1>
			<DestCard
				image={
					"https://himalayanadventurenepal.com/wp-content/uploads/2018/07/homestay-nepal.jpg"
				}
			/>
		</div>
	)
}

export default Home
