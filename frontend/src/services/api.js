import axios from 'axios';

const API_BASE_URL = axios.create({
    baseURL: 'http://localhost:5000'
});

export const fetchBooks = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/books/all`);
    return response.data;
};

export const fetchBookById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/api/books/all/${id}`);
    return response.data;
};

export const fetchReviews = async (bookId) => {
    const response = await axios.get(`${API_BASE_URL}/api/reviews/all-review/${bookId}`);
    return response.data;
};

export const postReviews = async (reviewData) => {
    const response = await axios.post(`${API_BASE_URL}/api/reviews/create-review`, reviewData);
    return response.data;
};


export const fetchUser = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/api//users/user/${userId}`);
    return response.data;
};

export const updateUser = async (userId, userData) => {
    const response = await axios.put(`${API_BASE_URL}/api/users/user/${userId}`, userData);
    return response.data;
};