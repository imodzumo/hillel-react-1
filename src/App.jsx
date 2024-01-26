import './App.css'
import Form from "./components/Form.jsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from "./validationSchema.js";
import Input from "./components/Input.jsx";


const App = () => {
    const {register, handleSubmit, formState: { errors}, reset, control} = useForm({
        defaultValues: {
            name: "user name",
            email: "email@gmail.com",
            address: "address"
        },
        resolver: yupResolver(validationSchema),
        // mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }


    return (
        <div>
            {/*<Form/>*/}


            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    render={({field, fieldState: {error}}) => <Input {...field} error={error.message} placeholder="name"/>}
                />

                <Controller name="email" control={control} render={({field}) => <Input {...field} placeholder="email"/>} />

                <Controller name="address" control={control} render={({field}) => <Input {...field} placeholder="address"/>} />


                {/*<input {...register("name")} type="text" placeholder="name"/>*/}
                {/*{errors.name && <div>{errors.name.message}</div>}*/}

                {/*<input {...register("email")} type="email" placeholder="email"/>*/}
                {/*{errors.email && <div>{errors.email.message}</div>}*/}

                {/*<input {...register("address")} type="text" placeholder="address"/>*/}
                {/*{errors.address && <div>{errors.address.message}</div>}*/}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default App;
