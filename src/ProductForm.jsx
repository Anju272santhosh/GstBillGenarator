import React, { useState } from 'react';

const ProductForm = ({ categories, addProduct }) => {
  // State for managing form inputs
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate tax and add product with details to the list
    addProduct({
      name: productName,
      category: selectedCategory,
      quantity: parseInt(productQuantity),
      price: parseFloat(productPrice),
      tax: calculateTax(selectedCategory, parseFloat(productPrice)),
    });
    // Reset form input fields after adding the product
    setProductName('');
    setSelectedCategory('');
    setProductQuantity('');
    setProductPrice('');
  };

  // Function to calculate tax based on category and price
  const calculateTax = (category, price) => {
    // Tax calculation logic based on category
    if (category === 'Electronics') {
      return price * 0.2; // Assuming 20% tax for Electronics
    } else if (category === 'Food') {
      return price * 0.05; // Assuming 5% tax for Food
    } else {
      return price * 0.1; // Default 10% tax for other categories
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      {/* Input fields for product details */}
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      {/* Dropdown to select category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {/* Displaying available categories */}
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      &nbsp

      {/* Input fields for quantity and price */}
      <input
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
        placeholder="Quantity"
      />

      &nbsp

      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product Price"
      />

      &nbsp
      {/* Button to submit the form */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
