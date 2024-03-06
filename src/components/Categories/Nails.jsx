import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import khila1 from "./img/khila-1.jpg";
import khila5 from "./img/khila-7.jpg";
import khila8 from "./img/khila-6.jpg";
import khila9 from "./img/khila-5.jpg";
import khila7 from "./img/khila-4.jpg";
import khila6 from "./img/khila-3.jpg";
import khila10 from "./img/khila-2.jpg";
import khila4 from "./img/khila-8.jpg";
import khila3 from "./img/khila-9.jpg";
import khila2 from "./img/khila-10.jpg";
import "../Categories/categories.css";
import { useQuote } from "../../QuoteContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nails = () => {
  const products = [
    { name: 'Giriraj Screw', MOQ:'80 pc', image: khila1, rating: 4.8 , rate:10},
    { name: 'Metal Screw', MOQ:'80 pc', image: khila2, rating: 4.8 , rate : 20},
    { name: 'Chipboard Screw', MOQ:'80 pc', image: khila5, rating: 4.8 ,rate:30},
    { name: 'Wooden Screw',  MOQ:'80 pc', image: khila6, rating: 4.8 ,rate:50},
    { name: 'Anchor Screw', MOQ:'80 pc', image: khila7, rating: 4.8 ,rate:20},
    { name: 'FLange Hex SDS Screw',  MOQ:'80 pc', image: khila8, rating: 4.8 ,rate:30},
    { name: 'Truss head SDS Screw',  MOQ:'80 pc', image: khila9, rating: 4.8 ,rate:30},
    { name: 'Nylon Anchor Screw',  MOQ:'80 pc', image: khila10, rating: 4.8 ,rate:90},
    { name: 'Gypsum Screw', MOQ:'80 pc', image: khila3, rating: 4.8 ,rate:30},
    { name: 'SDS Screw',  MOQ:'80 pc', image: khila4, rating: 4.8 ,rate:100},
  ];

  const { addToQuote } = useQuote();

  const handleAddToCart = (product) => {
    addToQuote(product);
    // Show a toast notification
    toast.success(`${product.name} added to get Quotes`, {
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
        <h3 style={Title}>SCREW</h3>
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

export default Nails;
