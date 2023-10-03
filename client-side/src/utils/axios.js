import axios from "axios";
import Swal from "sweetalert2";

const API_BASE_URL = "https://custom-form-app.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const createForm = async (formData) => {
  console.log("HEY")
  try {
    const response = await api.post("/admin/create", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    Toast.fire({
      icon: "success",
      title: "Form created successfully", 
    });
    return response;
  } catch (error) {
    Toast.fire({
      icon: "error",
      text: error.response.data.error,
    });
  }
};

export const getFormDetails = async (formId) => {
  try {
    const response = await api.get(`/user/forms/${formId}`);
    return response
    
  } catch (error) {
    throw error;
  }
};




export default api;
