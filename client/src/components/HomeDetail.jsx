import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useState } from "react"
import { Icon } from "leaflet"

const icon = new Icon({
	iconUrl: Marker,
	iconSize: [29, 17],
	iconAnchor: [15, 0],
	popupAnchor: [15, -5],
})

const init = {
	cords: [28.1310692, 83.7575468],
	fetched: false,
}

const HomeDetail = () => {
	const [values, setValues] = useState(init)
	const [map, setMap] = useState(null)

	const resetCord = async () => {
		setValues(init)
		map.panTo(init.cords, 5)
	}

	return (
		<div className="h-full flex flex-col justify-center w-full">
			<MapContainer
				center={[...init.cords]}
				zoom={16}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[...init.cords]}>
					<Popup>
						Sirubari Homestay <br /> Syanjya, Nepal.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default HomeDetail
