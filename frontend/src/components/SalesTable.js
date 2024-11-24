import React from "react";
import { useApi } from "../context/ApiContext";
import SaleRow from "./SaleRow";

const SalesTable = () => {
  const { sales } = useApi();

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Date</th>
          <th className="border border-gray-300 px-4 py-2">Customer</th>
          <th className="border border-gray-300 px-4 py-2">Product</th>
          <th className="border border-gray-300 px-4 py-2">Quantity</th>
          <th className="border border-gray-300 px-4 py-2">Price</th>
          <th className="border border-gray-300 px-4 py-2">Total</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale) => (
          <SaleRow key={sale.id} sale={sale} />
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
