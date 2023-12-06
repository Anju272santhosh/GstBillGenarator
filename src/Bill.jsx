import React from 'react';

const Bill = ({ products }) => {
  // Function to handle printing the bill details
  const handlePrint = () => {
    // Get the bill details section to print
    const billDetails = document.querySelector('.bill');
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    if (printWindow) {
      // Write content to the new window
      printWindow.document.write('<html><head><title>Bill Details</title>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(billDetails.innerHTML); // Write bill details content to the new window
      printWindow.document.write('</body></html>');

      printWindow.document.close(); // Close the document to render content
      printWindow.print(); // Print the new window content
    } else {
      console.log('Could not open print window.'); // Handle if the window failed to open
    }
  };

  let content;

  if (products.length === 0) {
    // Display message if no items are added
    content = (
      <div className='Nobill'>
        <h2>No Items Added</h2>
        <p>Please select a category and product to generate a bill.</p>
      </div>
    );
  } else {
    // Calculate subtotal, total tax, and total bill amount
    const subtotal = products.reduce((total, product) => total + product.price, 0);
    const totalTax = products.reduce((total, product) => total + product.tax, 0);
    const totalBill = subtotal + totalTax;

    content = (
      <div className='bill'>
        {/* Bill details */}
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
            {/* Display each product */}
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>Rs{product.price}</td>
                <td>Rs{product.tax}</td>
                <td>{product.price + product.tax}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Bill summary */}
        <div className="bill-summary">
          <p>Subtotal: Rs{subtotal}</p>
          <p>Total Tax: Rs{totalTax}</p>
          <p>Total Bill Amount: Rs{totalBill}</p>
        </div>

        {/* Print button */}
        <button className="print-button" onClick={handlePrint}>
          Print Bill
        </button>

      </div>
    );
  }

  return content;
};

export default Bill;
