import {useDispatch, useSelector} from "react-redux";
import {deleteFromCart, decrementQty, incrementQty} from "../redux/slices/cartSlice.js";

const Cart = ()=> {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.items);


	return (
		<div>
			<ul>
				{items.map(item =>
						<li key={item.id}>
							<p>{item.name}</p>
							<div>
								<button onClick={()=> dispatch(incrementQty(item))}>+</button>
								<div>{item.qty}</div>
								<button onClick={()=> dispatch(decrementQty(item))}>-</button>
							</div>
							<button onClick={()=> dispatch(deleteFromCart(item))}>Delete from cart</button>
						</li>
				)}
			</ul>
		</div>
	);
}

export default Cart;
