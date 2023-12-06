import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Bill from './Bill';
import './style.css';

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

  const handleDelete = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleGSTUpdate = (index, newGSTValue) => {
    const updatedCategories = [...categories];
    updatedCategories[index].gst = newGSTValue; // Update the GST rate for the specific category
    setCategories(updatedCategories);
  };

  return (
    <Router>
      <div className="container">
        <div className="card">
          <h1>GST System</h1>
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
                <Link to="/generate-bill">Generated Bill</Link>
              </li>
              <li>
                <Link to="/category-list">Category List</Link>
              </li>
              <li>
                <Link to="/product-list">Product List</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-category" element={<CategoryForm addCategory={addCategory} />} />
            <Route path="/add-product" element={<ProductForm categories={categories} addProduct={addProduct} />} />
            <Route path="/generate-bill" element={<Bill products={products} />} />
            <Route
              path="/category-list"
              element={<CategoryList categories={categories} handleDelete={handleDelete} handleGSTUpdate={handleGSTUpdate} />}
            />
            <Route
              path="/product-list"
              element={<ProductList products={products} handleDelete={handleDeleteProduct} />}
            />

           
        
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className='home'>
      <h2>Welcome to GST System</h2>
      <p>Welcome to our intuitive GST BILL generator, developed using React.js and Vite! Our tool allows you to effortlessly create invoices by customizing product categories with their respective GST percentages, adding new products, and seamlessly generating bills by selecting desired products.

One of the standout features of our solution is its use of local storage, enabling the convenient storage and retrieval of product categories and their associated items. This ensures that your information remains easily accessible and readily available whenever you need it.

Experience the simplicity of managing invoices and product information within our user-friendly interface. Streamline your billing process and tailor invoices to suit your specific needs with ease..</p>
    </div>
  );
};

export default App;
