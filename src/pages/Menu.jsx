import MenuItem from "../components/MenuItem.jsx";
import {useEffect, useState} from "react";
import {PIZZA_API} from "../constants.js";

const Menu = ()=> {

	const [menu, setMenu] = useState([]);

	useEffect(()=> {
		const getMenu = async ()=> {
			const res = await fetch(`${PIZZA_API}/menu`);
			const {data} = await res.json();
			setMenu(data);
		}
		getMenu();
	}, [])

	return (
		<div>
			<div>
				{menu.map(item => <MenuItem key={item.id} item={item} />)}
			</div>
		</div>
	);
}

export default Menu;
