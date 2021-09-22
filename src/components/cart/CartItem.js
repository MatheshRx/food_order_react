import "../../css/materia/bootstrap.min.css";

const CartItem = (props) => {
  return (
    <li className={`list-group-item`}>
      <div className="row justify-content-between">
        <div className="col-4">
          <i>{props.name}</i> <br />
          <span>
            <b>{props.price.toFixed(2)}</b>
          </span>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <span className="badge rounded-pill bg-light">
            <b>x {props.amount}</b>
          </span>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <button
            className="btn btn-sm btn-outline-info me-2"
            onClick={props.onRemove}
          >
            -
          </button>
          <button className="btn btn-sm btn-outline-info" onClick={props.onAdd}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
