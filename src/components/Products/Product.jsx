/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import {addToCart} from '../../store/productSlice'
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
        console.log("data", data);
      })
      .catch((err) => {
        console.error(err);
        alert(err?.message);
      });
  };


  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch()

  const addToCartFnc = (e, product) => {
    e?.preventDefault();
    dispatch(addToCart(product));
  }


  return (
    <div className="Product">
      {products ? (
        <div className="Product__container">
          {products?.map((prod, idx) => (
            <div key={idx} className="Product__card">
              <img
                src={prod?.image}
                alt={prod.category}
              />
              <div className="Product__card__title">
                {prod?.title.length > 20
                  ? `${prod?.title.slice(0, 20)}...`
                  : prod?.title}
              </div>
              <div className="Product__card__price">${String(prod?.price).slice(0, 5)}</div>
              <button className="Product__card__button" onClick={(e) => addToCartFnc(e, prod)}>Add</button>
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
