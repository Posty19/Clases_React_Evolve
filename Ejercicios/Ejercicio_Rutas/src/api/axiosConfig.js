import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "la url del bac base",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Puedes añadir más encabezados, como tokens de autenticación
    // 'Authorization': `Bearer ${token}`,
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Modificar la configuración antes de enviar la solicitud
    // Por ejemplo, añadir un token de autenticación dinámicamente
    // config.headers.Authorization = `Bearer ${getToken()}`;
    console.log("Solicitud enviada:", config);
    return config;
  },
  (error) => {
    // Manejar errores de solicitud
    console.error("Error en la solicitud:", error);
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
axiosInstance.interceptors.response.use(
  (response) => {
    // Procesar la respuesta antes de devolverla
    console.log("Respuesta recibida:", response);
    return response;
  },
  (error) => {
    // Manejar errores de respuesta
    console.error(
      "Error en la respuesta:",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

export default axiosInstance;
