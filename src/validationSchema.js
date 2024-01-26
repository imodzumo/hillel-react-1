import * as yup from "yup";

export const validationSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email("not valid email Dude").required(),
	address: yup.string().required()
})
