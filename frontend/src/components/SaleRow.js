import React from "react";
import { useApi } from "../context/ApiContext";

const SaleRow = ({ sale }) => {
  const { deleteSale } = useApi();

  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{sale.date}</td>
      <td className="border border-gray-300 px-4 py-2">{sale.customerName}</td>
      <td className="border border-gray-300 px-4 py-2">{sale.productName}</td>
      <td className="border border-gray-300 px-4 py-2">{sale.quantity}</td>
      <td className="border border-gray-300 px-4 py-2">{sale.price}</td>
      <td className="border border-gray-300 px-4 py-2">
        {sale.quantity * sale.price}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <button
          onClick={() => deleteSale(sale.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SaleRow;
