import axios from "../../utils/axios";

export const getTransactions = async () => {
    const response = await axios.get("/allTransactions");
    return response.data;
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transaction", data);
    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transaction/${id}`, data);
    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transaction/${id}`);
    return response.data;
};