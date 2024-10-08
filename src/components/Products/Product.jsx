/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/productSlice";
import { Link } from "react-router-dom";
const Product = () => {
  const BASEURL = `https://fakestoreapi.com/`;
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(`${BASEURL}products`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        alert(err?.message);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();
  const length = useSelector((state) => state.product.length);

  const addToCartFnc = (e, product) => {
    e?.preventDefault();
    dispatch(addToCart(product));
  };
  const removeCart = (e, productId) => {
    e?.preventDefault();
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="Product">
      {products ? (
        <div className="Product__container">
          {products?.map((prod, idx) => (
            <div key={idx} className="Product__card">
              <Link to={`/products/${prod.id}`}>
                <img src={prod?.image} alt={prod.category} />
              </Link>
              <div className="Product__card__title">
                {prod?.title.length > 20
                  ? `${prod?.title.slice(0, 20)}...`
                  : prod?.title}
              </div>
              <div className="Product__card__price">
                ${String(prod?.price).slice(0, 5)}
              </div>
              {length > 0 ? (
                <div className="extraAdd">
                  <button
                    className="extraAdd__btn"
                    onClick={(e) => {
                      addToCartFnc(e, prod);
                    }}
                  >
                    +
                  </button>
                  <input type="number" disabled value={length} />
                  <button
                    className="extraAdd__btn"
                    onClick={(e) => removeCart(e, prod?.id)}
                  >
                    -
                  </button>
                </div>
              ) : (
                <button
                  className="Product__card__button"
                  onClick={(e) => {
                    addToCartFnc(e, prod);
                  }}
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>No Items Found</div>
      )}
    </div>
  );
};

export default Product;
