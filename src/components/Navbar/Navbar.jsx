import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { name } = useSelector((state) => state.profile);

  return (
    <div className="Navbar">
      <nav>
        <div className="Navbar__brand">
          <Link className="Navbar__link" to="/">
            K Shopping
          </Link>
        </div>
        <ul className="Navbar__items">
          <li className="Navbar__item">
            <Link className="Navbar__link" to="/">
              Home
            </Link>
          </li>
          <li className="Navbar__item">
            <Link className="Navbar__link" to="/products">
              Products
            </Link>
          </li>
          <li className="Navbar__item">
            <Link className="Navbar__link" to="/cart">
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              <span className="cart"></span>
            </Link>
          </li>
          <li className="Navbar__item">
            <Link className="Navbar__link" to="/profile">
              <i className="fa-solid fa-user" aria-hidden="true"></i>
              {name}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
