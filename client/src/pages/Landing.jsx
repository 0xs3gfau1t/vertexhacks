import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { verifylogin } from "../redux/actions/auth"

const Landing = () => {
	const { isAuthenticated, verifying } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!isAuthenticated && !verifying) dispatch(verifylogin(false))
	}, [isAuthenticated])

	if (isAuthenticated && !verifying) {
		return <Navigate to="/home" />
	}
	return (
		<section className="h-screen px-6 p-10 bg-indigo-100">
			<div className="flex items-center flex-wrap mb-20">
				<div className="w-full md:w-1/2 text-center ">
					<h4 className="text-4xl text-gray-800 font-bold mb-3">
						Go where the locals go
					</h4>
					<p className="text-gray-600 text-2xl mb-8">
						Unlock travel confidence with a local guidebook built
						just for you.
					</p>
					<Link to="/login">
						<button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-5 rounded-full">
							Start Your Trip
						</button>
					</Link>
				</div>
				<div className="w-full md:w-1/2 p-5">
					<img src="/src/assets/new.png" alt="Tourism" />
				</div>
			</div>
		</section>
	)
}

{
	/* <div className="flex mx-auto py-28 items-center gap-32 w-1/2 text-center">
							<div className="flex flex-col items-start p-0 gap-8">
								<div className="flex flex-col items-start p-0 gap-6">
									<h1 className=" pt-8 text-4xl font-bold text-center">
										Sajilo Bus
									</h1>
									<h2 className="text-xl font-bold">
										Travel safely, pay smartly
									</h2>
								</div>
								<p className=" text-lg ">
									Lorem ipsum dolor sit amet consectetur, adipisicing
									elit. Ut dignissimos maxime dolores veniam
									molestias. Dolores cupiditate beatae ducimus
									molestiae quibusdam, eveniet assumenda! Atque
									perferendis enim ducimus sunt eaque esse maiores.
								</p>
								<div className="flex gap-4">
									<Link to="/member">
										<button className="button1 nav-item">
											Member Login
										</button>
									</Link>
									<a href="#Learn_more">
										<button className="button2 nav-item">
											Learn More
										</button>
									</a>
								</div>
							</div>
							</div>
							<div className="w-1/2 landing-right">
								<img src="/src/assets/bronze.png" alt="Sajilo bus" />
							</div>
						</div> */
}

{
	/* <div className="flex mx-auto my-6 items-center gap-32 w-max left-32">
						<div className="flex flex-col items-start p-0 gap-6">
							<h1
								id="About_us"
								className=" pt-8 text-4xl font-bold"
							>
								About Us
							</h1>
							<p className=" text-lg ">
								Sajilo Bus is initiated keeping sensible development in
								mind and it's possible expandability. We connect Bus
								service, Bus and User with a simple portable card.
							</p>
							<p className=" text-lg ">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Eaque, exercitationem? Molestiae quam reiciendis
								voluptatibus rerum quod corrupti tempora reprehenderit
								debitis ipsa natus eos nobis odio, inventore, pariatur
								quae, optio labore.
							</p>
						</div>
					</div> */
}
{
	/* <div className="flex mx-auto my-6 items-center gap-32 w-max left-32">
						<div className="flex flex-col items-start p-0 gap-6">
							<h1
								id="Learn_more"
								className=" pt-8 text-4xl font-bold"
							>
								How Sajilo Bus works??
							</h1>
							<p className=" text-lg ">
								Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. Quam a, inventore itaque cumque molestiae ducimus
								autem maiores sequi aspernatur, quos soluta nostrum
								doloribus reprehenderit quaerat eius quo suscipit animi
								vitae..
							</p>
							<p className=" text-lg ">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Eaque, exercitationem? Molestiae quam reiciendis
								voluptatibus rerum quod corrupti tempora reprehenderit
								debitis ipsa natus eos nobis odio, inventore, pariatur
								quae, optio labore.
							</p>
						</div>*/
}
// 	</div>
// </div>
// 	)
// }

export default Landing
