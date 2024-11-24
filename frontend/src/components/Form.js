import React, { useState } from "react";
import { useApi } from "../context/ApiContext";

const initialFormState = {
  date: new Date().toISOString().split("T")[0],
  customerName: "",
  productName: "",
  quantity: 1,
  price: 150,
};

const Form = () => {
  const { addSale } = useApi();
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({}); // State to store validation errors

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Date is required.";
    if (!form.customerName.trim())
      newErrors.customerName = "Customer Name is required.";
    if (!form.productName.trim())
      newErrors.productName = "Product Name is required.";
    if (form.quantity <= 0)
      newErrors.quantity = "Quantity must be greater than zero.";
    if (form.price <= 0) newErrors.price = "Price must be greater than zero.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addSale(form); // Call API to add the sale
      setForm(initialFormState); // Reset form to initial state
      setErrors({}); // Clear errors
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col justify-center items-center"
    >
      <div className="mb-4">
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded mr-2 w-full"
          aria-label="Date"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Product Name"
          value={form.productName}
          onChange={(e) => setForm({ ...form, productName: e.target.value })}
          className="border p-2 rounded w-full"
          aria-label="Product Name"
        />
        {errors.productName && (
          <p className="text-red-500 text-sm">{errors.productName}</p>
        )}
      </div>
      <div className="mb-4 w-full">
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: Number(e.target.value) })
          }
          className="border p-2 rounded w-full"
          aria-label="Quantity"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm">{errors.quantity}</p>
        )}
      </div>
      <div className="mb-4 w-full">
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          className="border p-2 rounded w-full"
          aria-label="Price"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
      >
        Add Sale
      </button>
    </form>
  );
};

export default Form;
