
const Input = (props)=> {
	const {value, onChange, onBlur, name, ref, placeholder, error} = props

	return (
		<div>
			<input type="text" placeholder={placeholder} ref={ref} value={value} onBlur={onBlur} onChange={onChange} name={name} />
			{error && <div>{error}</div>}
		</div>
	);
}

export default Input;
