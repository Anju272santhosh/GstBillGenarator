import React from 'react';

const ProductList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          {/* <th>Tax</th> */}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            {/* <td>{product.tax}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;