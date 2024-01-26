import {useState} from "react";

const Form = ()=> {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('email@gmail.com');

	const [errorName, setErrorName] = useState('');
	const [errorEmail, setErrorEmail] = useState('');


	const handleSubmitForm = (e) => {
		e.preventDefault();
		console.log(name, "name", email, "email");
	}

	const validateUserName = () => {
		if (name.trim() === "") {
			setErrorName("empty input")
		} else if (name.trim().length < 8) {
			setErrorName("must be more than 8 letters")
		} else {
			setErrorName("")
		}
	}

	const validateEmail = () => {
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

		if (!emailRegex.test(email)) {
			setErrorEmail("not valid email")
		} else {
			setErrorEmail("")
		}
	}

	const isButtonDisabled = name.trim().length === 0 || email.trim().length === 0 ||errorName || errorEmail;

	return (
		<div>
			<form onSubmit={handleSubmitForm}>
				<input
					onBlur={validateUserName}
					type="text"
					placeholder="name"
					onChange={(e) => setName(e.target.value)}
					required />
				{errorName && <p>{errorName}</p>}
				<br/>
				<input onBlur={validateEmail} type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
				{errorEmail && <p>{errorEmail}</p>}
				<br/>
				<button type="submit" disabled={isButtonDisabled}>Submit</button>
			</form>
		</div>
	);
}

export default Form;
