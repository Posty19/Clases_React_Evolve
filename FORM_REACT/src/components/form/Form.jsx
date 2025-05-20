import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schemaValidation";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => console.log('a sangre y fuego');

  return (
    <div>
      <h2>Formulario de registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input {...register("nombre")/* valida el campo */} type="text" id="name" />
          {errors.nombre && <p>{errors.nombre.message}</p>}{/* muestra el error */}
        </div>
        <div>
          <label htmlFor="age">Edad</label>
          <input {...register("edad")} type="number" id="age" />
          {errors.edadnombre && <p>{errors.edad.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="text" id="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
        <div>
          <button type='button' onClick={reset}>Limppiar</button>
        </div>
      </form>

        <div>
            <p>Valores en tiempo real</p>
            <ul>
                <li>Nombre: {watch('nombre')}</li>{/* watch -> valor en tiempo real */}
                <li>Email: {watch('email')}</li>
                <li>Edad: {watch('edad')}</li>
            </ul>
        </div>
        
    </div>
    
  );
};
export default Form;
