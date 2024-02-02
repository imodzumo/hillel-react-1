import {useState} from "react";

const Home = ()=> {
	const [width, setWidth] = useState(200)

	const changeWidth = () => {

	}

	return (
		<div className="homepage-container">
			Home

			<input type="number" value={width} onChange={(e) => setWidth(e.target.value)}/>
			<div style={{width: `${width}px`, backgroundColor: "red"}}>Hello</div>
		</div>
	);
}

export default Home;
