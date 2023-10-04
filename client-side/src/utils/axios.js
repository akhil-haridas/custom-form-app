import axios from "axios";
import { Toast } from "./utils";

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

export const createForm = async (formData) => {
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
    return response;
  } catch (error) {
    throw error;
  }
};

export const getForms = async () => {
  try {
    const response = await api.get("/admin/forms");
    return response;
  } catch (error) {
    console.error("Error fetching forms:", error);
  }
};

export const getFormResponses = async (formId) => {
  try {
    const response = await api.get(`/admin/forms/${formId}`);
    return response;
  } catch (error) {
    console.error("Error fetching form responses:", error);
  }
};

export const getForm = async (formId) => {
  try {
    const response = await api.get(`/user/forms/${formId}`);
    return response;
  } catch (error) {
    console.error("Error fetching form details:", error);
  }
};

export const createResponse = async (formData) => {
  try {
    const response = await api.post("/user/create", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error creating user response:", error);
    throw error;
  }
};

export default api;
