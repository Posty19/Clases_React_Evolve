import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers'
import schema from "./schemaValidation";

const Form = () =>{
    const {register, handleSubmit, formState:{errors}, watch, reset} = useForm({
        resolver:yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data);
    return(
        <div className="formContainer">
            <h2>Formulario de registro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input {...register('nombre')} type="text" />
                    {errors.nombre && <p className="errors">errors.nombre.message</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input {...register('emil')} type="text" />
                    {errors.email && <p className="errors">errors.email.message</p>}
                </div>
                <div>
                    <label htmlFor="age">Edad:</label>
                    <input {...register('edad')} type="number" />
                    {errors.edad && <p className="errors">errors.edad.message</p>}
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
                <div>
                    <button onClick={()=>reset}>Limpiar</button>
                </div>
                <p>valores en tiempo real</p>
                <ul>
                    <li>Nombre:{watch('nombre')}</li>
                    <li>Email:{watch('email')}</li>
                    <li>Edad:{watch('nombre')}</li>
                </ul>
            </form>
        </div>

    )
}

export default Form;