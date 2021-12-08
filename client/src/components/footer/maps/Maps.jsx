import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({ text }) => (
	<div
		style={{
			color: "red",
			fontSize: "30px",
		}}
	>
		{text}
	</div>
);
let defaultProps = {
	center: {
		lat: 31.4,
		lng: 74.21,
	},
	zoom: 11,
};

const Maps = () => {
	return (
		<div style={{ height: "40vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent
					lat={31.40290162805332}
					lng={74.21263409751387}
					text={<FaMapMarkerAlt />}
				/>
			</GoogleMapReact>
		</div>
	);
};

export default Maps;
