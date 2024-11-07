/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/productsSlice";
import { Link } from "react-router-dom";
const Product = () => {
  const BASEURL = `https://fakestoreapi.com/`;
  const product = useSelector((state) => state.product.items)

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
    console.log(product, "PRODUCTS");
  }, [product]);

  const dispatch = useDispatch();

  const addToCartFn = (product) => {
    dispatch(addToCart({ product }));
  }

  const removeFromCartFn = (productId) => {
    dispatch(removeFromCart({ productId }))
  }


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
              <div className="extraAdd">
                <button
                  className="extraAdd__btn"
                  onClick={() => {
                    addToCartFn(prod);
                  }}
                >
                  +
                </button>
                <input type="number" disabled value={prod?.quantity ? prod?.quantity : 0} />
                <button
                  className="extraAdd__btn"
                  onClick={() => {
                    removeFromCartFn(prod?.id);
                  }}
                >
                  -
                </button>
              </div>
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
