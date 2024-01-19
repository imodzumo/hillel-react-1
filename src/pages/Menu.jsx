import MenuItem from "../components/MenuItem.jsx";
import {useEffect, useState} from "react";
import {PIZZA_API} from "../constants.js";
import {useDispatch, useSelector} from "react-redux";
import {getMenuItems} from "../redux/slices/cartSlice.js";

const Menu = ()=> {
	const dispatch = useDispatch();
	const {isLoading, isError, menuItems} = useSelector(state => state.cart)
	// const [menu, setMenu] = useState([]);

	useEffect(()=> {
		// const getMenu = async ()=> {
		// 	const res = await fetch(`${PIZZA_API}/menu`);
		// 	const {data} = await res.json();
		// 	setMenu(data);
		// }
		// getMenu();
		dispatch(getMenuItems());

	}, [dispatch])

	if (!isError) {
		return <div>Error message</div>
	}
	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div>
				{menuItems.map(item => <MenuItem key={item.id} item={item} />)}
			</div>
		</div>
	);
}

export default Menu;
