import { forwardRef } from 'react';
import {useController} from "react-hook-form";

const Input = ((props) => {
	// const { onChange, onBlur, name, value, placeholder, error } = props;

	const {field, fieldState} = useController(props)


	return (
		<div>
			{/*<input*/}
			{/*	type="text"*/}
			{/*	placeholder={placeholder}*/}
			{/*	ref={ref}*/}
			{/*	value={value}*/}
			{/*	onBlur={onBlur}*/}
			{/*	onChange={onChange}*/}
			{/*	name={name}*/}
			{/*/>*/}
			{/*{error && <div>{error.message}</div>}*/}
			<input type="text" {...field}/>
		</div>
	);
});

export default Input;
