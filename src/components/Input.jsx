import {forwardRef} from "react";

const Input = forwardRef((props, ref) => {


	return (
		<div>
			<input type="text" placeholder="Enter text" ref={ref}/>
		</div>
	);
});

export default Input;
