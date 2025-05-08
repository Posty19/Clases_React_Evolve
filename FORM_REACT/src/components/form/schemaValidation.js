import * as yup from "yup";

const schema = yup.object({
  nombre: yup
    .string()
    .required("El campo es obligatorio")
    .min(3, "El nombre como minimo debe tener 3 caracteres")
    .max(50, "El nombre es demasiado largo")
    // eslint-disable-next-line no-useless-escape
    .matches("^[a-zA-Zs]+$", "solo se permiten letras y espacios"),

  email: yup
    .string()
    .required("El email es  obligatioio")
    .email("Ingresa un forrmato de email válido"),

  fechaNacimieto: yup
    .date()
    .required("La fecha es obligatoria")
    .max(new Date(), "La fecha no puede ser futura")
    .test("edad-minima", "Debes de tene almeno 18 años", (value) => {
      const fechaActual = new Date();
      const fechaMinima = new Date(
        fechaActual.getFullYear() - 18,
        fechaActual.getMonth(),
        fechaActual.getDate()
      );
      return value <= fechaMinima;
    }),
});

export default schema;
