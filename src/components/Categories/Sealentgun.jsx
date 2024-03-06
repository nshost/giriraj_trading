import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Categories/categories.css';
import gun1 from '../Categories/img/gun1.jpg';
import gun2 from '../Categories/img/gun2.jpg';
import gun3 from '../Categories/img/gun3.jpg';
import gun4 from '../Categories/img/gun4.jpg';
import gun5 from '../Categories/img/gun5.jpg';
import gun6 from '../Categories/img/gun6.jpg';
import { useQuote } from '../../QuoteContext';

const Sealentgun = () => {
  const products = [
    { name: 'GT-2001', MOQ:'80 pc', image: gun1, rating: 4.8, rate: 10 },
    { name: 'GT-2002', MOQ:'100 pc', image: gun2, rating: 4.8, rate: 20 },
    { name: 'GT-2003', MOQ:'80 pc', image: gun3, rating: 4.8, rate: 30 },
    { name: 'GT-2004', MOQ:'40 pc', image: gun4, rating: 4.8, rate: 50 },
    { name: 'GT-2005', MOQ:'40 pc', image: gun5, rating: 4.8, rate: 20 },
    { name: 'GT-2006', MOQ:'80 pc', image: gun6, rating: 4.8, rate: 30 },
  ];
  const { addToQuote } = useQuote();

  const handleAddToCart = (product) => {
    addToQuote(product);
    // Show a toast notification
    toast.success(`${product.name}  added to get Quotes`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const Title = {
    marginTop: '0.2rem',
    marginLeft: '1rem',
  };

  return (
    <section className="vw-100 mb-5 product-desc-hero">
      <div className="container product-title">
        <Link to="/" className="back-to-home">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
        <h3 style={Title}>SEALANT-GUNS</h3>
      </div>
      <div className="container mt-5">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card">
                <div className="image-container">
                  <img src={product.image} className="img-fluid rounded thumbnail-image" alt={product.name} />
                </div>
                <div className="product-detail-container p-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="dress-name">{product.name} <br/> M.O.Q {product.MOQ}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-1">
                    <div>
                      <i className="fa fa-star-o rating-star"></i>
                      <span className="rating-number">{product.rating}</span><br/>
                      <p className="rating-number">{product.rate}</p>
                    </div>
                    <button className="discount" onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Sealentgun;
