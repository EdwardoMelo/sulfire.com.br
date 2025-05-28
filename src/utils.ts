import { api } from "./api";

const sendContactForm = async (data) => {
    try {
    const response = await api.post("/contato", data);
    return response.data;
    } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
    }
}

export  {sendContactForm}