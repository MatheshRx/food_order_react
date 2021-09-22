import { useContext } from "react";
import "../../../css/materia/bootstrap.min.css";
import mainClasses from "../../../css/style/Main.module.css";
import CartContext from "../../../store/cart-context";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const addToCart = (enteredAmountNumber) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmountNumber,
    });
  };
  return (
    <li className={`list-group-item ${mainClasses["bg-malibu-beach"]}`}>
      <div className="row">
        <div className="col-md-8 col-10">
          <div>
            <b>{props.name}</b>
          </div>
          <div>
            <i>{props.description}</i>
          </div>
        </div>
        <div className="col-md-4 col-10 text-center">
          <div>
            Cost: <b>&#8377;{price}</b>
          </div>
          <MealsItemForm onAddToCart={addToCart} />
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
