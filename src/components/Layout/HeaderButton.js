import { useContext } from "react";
import AddCart from "../cart/AddCart";
import "../../css/materia/bootstrap.min.css";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberofItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="btn btn-secondary btn-sm" onClick={props.onShow}>
      <span style={{ fontSize: "20px" }}>
        <AddCart />
      </span>
      <span className="mx-2">Your Cart</span>
      <span className="badge rounded-pill bg-warning">
        {numberofItemsInCart}
      </span>
    </button>
  );
};

export default HeaderButton;
