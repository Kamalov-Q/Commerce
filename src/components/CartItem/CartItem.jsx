import { useEffect, useState } from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
    const BASEURL = `https://fakestoreapi.com/`;
    const [products, setProducts] = useState([]);
    const [display, setDisplay] = useState([]);
    const getItems = async () => {
        const response = await fetch(`${BASEURL}products`, {
            method: "GET",
        })
        const data = await response.json();
        setProducts(data);
        console.log("DATA", data);

    }


    useEffect(() => {
        getItems();
    }, [])


    // const selectedItem = products.filter((elem) => elem?.id === item.id);
    // console.log("SELECTEDITEMS", selectedItem);

    const ids = [];

    // const filtered = products.map((elem) => {
    //     ids.push(elem.id);
    //     ids.filter((el) => el.id === item.id)
    // })

    // console.log("FILTERED DATA", filtered);









    return (
        <div className="Cart__card">
            {/*  <img src={item?.image} alt={item.category} />
            <div className="Cart__card__title">
                    {item?.title?.length > 20
                      ? `${item?.title.slice(0, 20)}...`
                      : item?.title}
                  </div>
            <div className="Cart__card__price">${item?.price}</div>
            <button
                className="Cart__card__button"
                onClick={(e) => removeCart(e, item?.id)}
            >
                Delete
            </button> */}
            <div>CartItem</div>
        </div>
    )
}

export default CartItem
