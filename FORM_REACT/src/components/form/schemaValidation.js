import  * as yup from 'yup';

const schema = yup.object({
    nombre: yup
        .string()
        .required('El campo del nombre es obligatorio')
        .min(3,'Longitud minima de 3 caracteres')
        .max(50,'el maximo de caracteres ha de ser 50')
        .matches(/^[a-zA-z\s]+$/,'Solo se permiten letras y espacios'),

    email:  yup
        .string()
        .required('el Email es obligatorio')
        .email('Ingesa un formato de email válido'),
        
    edad: yup
        .number()
        .required('')
        .min(18,'')
        .max(120,''),
    
    password: yup
        .string()
        .required('')
        .min(8,'')
        .max(50,'')
        .matches(/[A-Z]/,'mayuscula')
        .matches(/[a-z]/,'minuscula')
        .matches(/[0-9]/,'numero')
        .matches(/[^A-Za-z0-9]/,'Debe tener un caracter especial'),


    confirmPassword: yup
        .string()
        .required('')
        .oneOf([yup.ref('password')],'Las contraseñas no coinciden'),
    
    fechaNacimineto: yup
        .date()
        .required('')
        .max(new Date(),'no puede ser un fecha furura')
        .test(
            'edad-minima',
            'Debes de ser mayor de edad',
            value =>{
                const hoy = new Date();
                const fechaMinima = new Date(
                    hoy.getFullYear() -18,
                    hoy.getMonth(),
                    hoy.getDate()
                );
                return value <= fechaMinima;
            }
        ),
    website: yup
        .string()
        .test(
            'url-schema',
            'la url ha de comenzar con https://',
            value => !value || value.startsWith('https://')
        ),
    
    aceptarTerminos: yup
        .boolean()
        .oneOf([true],'Debes deaceptar los terminos')
        .required('debes de aceptar los terminos'),
    
    pais: yup
        .string()
        .required('')
        .oneOf(['MX','ES','CO','AR']),

})
export default schema