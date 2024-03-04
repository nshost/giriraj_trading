import sliding from "../../assets/Slider-window.jpg";
import PVCGASKET from "../../assets/PVC-gasket.jpg";
import gun from "../../assets/sealeant-gun.jpg";
import conceal from "../../assets/Conseal-locks.jpg";
import { Link} from "react-router-dom";
import khila from '../Categories/img/khila-1.jpg'
const Categories = () => {
  return (
    <>
      <section className="product-section mb-5">
        <div className="container mt-5 text-white flex-column d-flex align-items-center fs-3">
          <p className="fs-3 fw-bold text-dark mt-5">Shop by Category</p>
        </div>
        <div className="container">
          <div className="row row-cols-1 mt-3 row-cols-md-4 g-4">
            <div className="col">
              <div className="card p-0 mb-4 ">
                <img
                  height={230}
                  src={sliding}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <Link to="/sealent-gun">
                    <h6 className="card-title text-center text-dark">
                      SLIDING WINDOW ROLLER
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-0 mb-4 ">
                <img
                  height={230}
                  src={khila}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <Link to="/screw">
                    <h6 className="card-title text-center text-dark">
                      Screw
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-0 mb-4 ">
                <img
                  height={230}
                  src={PVCGASKET}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <Link to="/sealent-gun">
                    <h6 className="card-title text-center text-dark">
                      PVC GASKET
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-0 mb-4 ">
                <img
                  height={230}
                  src={gun}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <Link to="/sealent-gun">
                    <h6 className="card-title text-center text-dark">
                      SEALENT GUN
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
