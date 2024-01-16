import {useDispatch} from "react-redux";
import {addToCart} from "../redux/slices/cartSlice.js";

const MenuItem = ({item})=> {

	const {name, unitPrice, imageUrl, ingredients, soldOut} = item;
	const dispatch = useDispatch();
	const handleAddToCart = ()=> {
		dispatch(addToCart(item));
	}

	return (
		<div>
			<img src={imageUrl} alt={name}/>
			<p>{name}</p>
			<p>{unitPrice} $</p>
			<button onClick={handleAddToCart}>Add to cart</button>
		</div>
	);
}

export default MenuItem;
