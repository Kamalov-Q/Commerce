import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import emptyCart from "../../assets/cart.webp";
import { clearCart, removeFromCart } from "../../store/productSlice";
const Cart = () => {
  const items = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  const removeCart = (e, productId) => {
    e?.preventDefault();
    dispatch(removeFromCart(productId));
  };

  const clearAll = (e) => {
    e?.preventDefault();
    dispatch(clearCart());
  };

  return (
    <div className="Cart">
      {items.length > 0 ? (
        <>
          <div className="Cart__container">
            {items &&
              items?.map((item, idx) => (
                <div key={idx} className="Cart__card">
                  <img src={item?.image} alt={item.category} />
                  <div className="Cart__card__title">
                    {item?.title.length > 20
                      ? `${item?.title.slice(0, 20)}...`
                      : item?.title}
                  </div>
                  <div className="Cart__card__price">${item?.price}</div>
                  <button
                    className="Cart__card__button"
                    onClick={(e) => removeCart(e, item?.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
          <div className="Cart__total">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items?.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <img
                          src={item?.image}
                          width={70}
                          height={70}
                          alt={item?.categories}
                        />
                      </td>
                      <td>{item?.title.slice(0, 10)}</td>
                      <td>2x {item?.price}$ </td>
                    </tr>
                  ))}
                <tr>
                  <td>
                    <button className="clearBtn" onClick={(e) => clearAll(e)}>
                      Clear All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="Cart__total_title">Total Price : $45000</div>
          </div>
        </>
      ) : (
        <div className="idle">
          <img src={emptyCart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
