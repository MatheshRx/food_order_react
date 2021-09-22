import Modal from "../UI/Modal";
import "../../css/materia/bootstrap.min.css";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const canOrder = cartCtx.items.length > 0;

  const addToCartHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const CartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={removeFromCartHandler.bind(null, item.id)}
      onAdd={addToCartHandler.bind(null, item)}
    />
  ));
  return (
    <Modal onClose={props.onCloseCart}>
      <div>
        <h4>Your Cart</h4>
      </div>
      <ul className={`list-group pb-2 ${classes.cartItem}`}>{CartItems}</ul>
      <div className="d-flex justify-content-between">
        <h3>Total Amount</h3>
        <span>
          <b>
            &#8377; <i>{cartCtx.totalAmount.toFixed(2)}</i>
          </b>
        </span>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-sm btn-outline-danger closeCart me-2"
          onClick={props.onCloseCart}
        >
          Close
        </button>
        {canOrder && (
          <button className="btn btn-sm btn-outline-warning">Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
