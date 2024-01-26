import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
	const { onChange, onBlur, name, value, placeholder, error } = props;

	return (
		<div>
			<input
				type="text"
				placeholder={placeholder}
				ref={ref}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
				name={name}
			/>
			{error && <div>{error.message}</div>}
		</div>
	);
});

export default Input;
