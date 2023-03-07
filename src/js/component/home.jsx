import React from "react";
import Luces from "./Luces.jsx";
const palostyle={
    width: "10px",
	height: "60px",
	margin: "0 auto",
}
const semaforostyle={
	
    width: "100px",
	height: "280px",
	margin: "0 auto",
	borderRadius: "15px",
	position: "relative",
}
//create your first component
const Home = () => {
	return (
		<div>
			<div className="bg-dark" style={palostyle}>
			</div>
			<div className="bg-dark" style={semaforostyle}>
				<Luces/>
			</div>
		</div>
	);
};

export default Home;
