import React, { useState } from 'react';

const GSTForm = ({ setGST }) => {
  const [category, setCategory] = useState('');
  const [gstRate, setGSTRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGST({ category, rate: gstRate });
    setCategory('');
    setGSTRate('');
  };

  return (
    <div>
      <h2>Set GST Rates</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Product Category" />
        <input type="number" value={gstRate} onChange={(e) => setGSTRate(e.target.value)} placeholder="GST Rate" />
        <button type="submit">Set GST Rate</button>
      </form>
    </div>
  );
};

export default GSTForm;
