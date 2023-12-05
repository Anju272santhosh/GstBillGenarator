import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import GSTForm from './GstForm';
import Bill from './Bill';

const App = () => {
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Add a new category to the state and local storage
  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  // Add a new product to the state and local storage
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Update local storage whenever categories or products change
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <Router>
      <div>
        <h1>GST System</h1>

        {/* Navigation bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-category">Add Category</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/generate-bill">Generate Bill</Link>
            </li>
            <li>
              <Link to="/category-list">Category List</Link>
            </li>
            <li>
              <Link to="/product-list">Product List</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/add-category"
            element={<CategoryForm addCategory={addCategory} />}
          />
          <Route
            path="/add-product"
            element={<ProductForm categories={categories} addProduct={addProduct} />}
          />
          <Route
            path="/generate-bill"
            element={<Bill products={products} />}
          />
          <Route
            path="/category-list"
            element={<CategoryList categories={categories} />}
          />
          <Route
            path="/product-list"
            element={<ProductList products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
