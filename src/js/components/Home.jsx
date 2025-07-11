import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [useColor, setColor] = useState("roja")

	return (
		<div className="container-md">
			<div className="semaforo">
				<div className="luz roja" onClick={()=> {useColor === "roja" ?  (+ " brillo") : " "}}></div>
				<div className="luz amarilla" onClick={()=> {useColor === "amarilla" ?  " brillo" : ""}}></div>
				<div className="luz verde" onClick={()=> {useColor === "verde" ?  " brillo" : ""}}></div>
			</div >
		</div >
	);
};

export default Home;