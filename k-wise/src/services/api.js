import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.102:7036'; // Replace with actual backend URL

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pc-parts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching PC parts:", error);
        throw error;
    }
};

export const postData = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/pc-parts`, data, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};
