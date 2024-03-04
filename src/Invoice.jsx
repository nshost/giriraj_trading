// Invoice.jsx
import React from 'react';

const Invoice = ({ selectedProducts }) => {
  // Calculate total and GST
  const total = selectedProducts.reduce((acc, product) => acc + product.rate, 0);
  const gst = total * 0.18; // Assuming 18% GST

  return (
    <div>
      <h2>Invoice</h2>
      {/* Display product details */}
      {selectedProducts.map((product, index) => (
        <div key={index}>
          {product.name} - Rate: {product.rate}
        </div>
      ))}
      {/* Display total and GST */}
      <div>Total: {total}</div>
      <div>GST (18%): {gst}</div>
    </div>
  );
};

export default Invoice;
