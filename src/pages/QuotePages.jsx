import React, { useState } from "react";
import { useQuote } from "../QuoteContext";
import { Link } from "react-router-dom";

const QuotePages = () => {
  const { state } = useQuote();
  const selectedProducts = state?.selectedProducts || [];
  const [showInvoice, setShowInvoice] = useState(false);

  // Calculate the total price of selected products
  const totalWithoutGST = selectedProducts.reduce((total, product) => {
    return total + parseFloat(product.rate);
  }, 0);

  // Calculate GST (18%)
  const GSTPercentage = 18;
  const GSTAmount = (totalWithoutGST * GSTPercentage) / 100;

  // Calculate total including GST
  const totalWithGST = totalWithoutGST + GSTAmount;

  const handleGetFinalQuotes = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: 'user@example.com', products: selectedProducts }),
      });

      const result = await response.json();

      if (result.success) {
        // Handle success, maybe show a success message to the user
        console.log('Emails sent successfully');
      } else {
        // Handle failure, show an error message
        console.error('Error sending emails:', result.message);
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }

    // After handling the email functionality, you can show the invoice modal
    setShowInvoice(true);
  };

  return (
    <section className="vw-100 mb-5 product-desc-hero">
      <div className="container product-title">
        <h3>Your Quotes</h3>
      </div>
      <div className="container mt-5">
        <div className="row">
          {selectedProducts.map((product, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card">
                <div className="image-container">
                  <img
                    src={product.image}
                    className="img-fluid rounded thumbnail-image"
                    alt={product.name}
                  />
                </div>
                <div className="product-detail-container p-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="dress-name">{product.name}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-1">
                    <div>
                      <i className="fa fa-star-o rating-star"></i>
                      <span className="rating-number">{product.rating}</span>
                      <p className="rating-number">{product.rate}</p>
                    </div>
                    <div className="quantity-text">
                      {productQuantities[product.name] && `x${productQuantities[product.name]}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-12">
            <button
              className="text-center Quote-button"
              onClick={handleGetFinalQuotes}
            >
              Get Final Quotes
            </button>
          </div>
        </div>
      </div>

      {showInvoice && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
            <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invoice</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowInvoice(false)}
                ></button>
              </div>
              <div className="modal-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Pieces</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProducts.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.MOQ}</td>
                        <td>${product.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Total (excluding GST): ${totalWithoutGST.toFixed(2)}</p>
                <p>
                  GST ({GSTPercentage}%): ${GSTAmount.toFixed(2)}
                </p>
                <p>Total (including GST): ${totalWithGST.toFixed(2)}</p>
              </div>
              <div className="modal-footer">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="text-center Quote-button"
                    onClick={() => setShowInvoice(false)}
                  >
                    Close
                  </button>
                </div>
                {/* Add any additional buttons or actions here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuotePages;
