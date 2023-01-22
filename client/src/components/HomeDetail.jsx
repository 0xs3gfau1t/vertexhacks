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
	cords: [28.258706333333333, 83.9807915],
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
		<div className="h-full flex flex-col justify-center">
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default HomeDetail
