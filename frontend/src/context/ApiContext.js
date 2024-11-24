import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// API URL
const API_URL = process.env.REACT_APP_API_URL;

// Create Context
const ApiContext = createContext();

// API Context Provider
export const ApiProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  // Fetch sales
  const fetchSales = async () => {
    try {
      const response = await axios.get(API_URL);
      setSales(response.data);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  // Add a sale
  const addSale = async (sale) => {
    try {
      const response = await axios.post(API_URL, sale);
      setSales((prevSales) => [...prevSales, response.data]);
    } catch (error) {
      console.error("Error adding sale:", error);
    }
  };

  // Delete a sale
  const deleteSale = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSales((prevSales) => prevSales.filter((sale) => sale.id !== id));
    } catch (error) {
      console.error("Error deleting sale:", error);
    }
  };

  // Fetch sales on mount
  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <ApiContext.Provider value={{ sales, addSale, deleteSale }}>
      {children}
    </ApiContext.Provider>
  );
};

// Hook to use API Context
export const useApi = () => useContext(ApiContext);
