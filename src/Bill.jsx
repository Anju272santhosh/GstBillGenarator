import React from 'react';

const Bill = ({ products }) => {
  // Check if products are available to generate the bill
  if (products.length === 0) {
    return (
      <div>
        <h2>No Items Added</h2>
        <p>Please select a category and product to generate a bill.</p>
      </div>
    );
  }

  const subtotal = products.reduce((total, product) => total + product.price, 0);
  const totalTax = products.reduce((total, product) => total + product.tax, 0);
  const totalBill = subtotal + totalTax;

  return (
    <div>
      <h2>Bill Details</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>${product.tax}</td>
              <td>${product.price + product.tax}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bill-summary">
        <p>Subtotal: ${subtotal}</p>
        <p>Total Tax: ${totalTax}</p>
        <p>Total Bill Amount: ${totalBill}</p>
      </div>
    </div>
  );
};

export default Bill;
