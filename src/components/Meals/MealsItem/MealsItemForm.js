import { Fragment, useRef, useState } from "react";
import "../../../css/materia/bootstrap.min.css";
import Input from "../../UI/Input";
import classes from "./Input.module.css";

const MealsItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5 ||
      enteredAmount.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "1";
    setIsValid(true);
  };

  return (
    <Fragment>
      <form className="d-flex justify-content-center" onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          className={`${classes.input}`}
          input={{
            type: "number",
            defaultValue: 1,
            max: 5,
            min: 1,
          }}
          label="Add Item"
        />
        <button className="btn btn-info px-1 btn-sm ms-2">+ Add</button>
      </form>
      {!isValid && (
        <small>
          <p className="text-danger">Enter valid amount (1-5).</p>
        </small>
      )}
    </Fragment>
  );
};

export default MealsItemForm;
