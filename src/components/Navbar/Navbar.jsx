import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {

  const user = useSelector(state => state.profile);
  const length = useSelector(state => state.product.length);
  

  return (
    <div className="Navbar">
      <nav>
        <div className="Navbar__brand">
          <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
            K Shopping
          </Link>
        </div>
        <ul className="Navbar__items">
          <li className="Navbar__item">
            <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li className="Navbar__item">
            <Link
              to={`/products`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Products
            </Link>
          </li>
          <li className="Navbar__item">
            <Link
              to={`/cart`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart">{length}</span>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to={`/profile`}>
              <i className="fa-solid fa-user" style={{ color: "white", marginRight: "10px"}}></i>
              {user?.name}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
