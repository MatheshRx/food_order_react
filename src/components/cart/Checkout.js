const Checkout = (props) => {
  return (
    <form className="col-10 mx-auto mt-3 card p-2">
      <h4 className="text-center">Checkout Details</h4>
      <div className="form-floating">
        <input type="text" className="form-control" placeholder="Name" />
        <label>Name : </label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="example@email.com"
        />
        <label className="form-label">Email : </label>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          rows="10"
          placeholder="Address"
        ></textarea>
        <label className="form-label">Address : </label>
      </div>
      <div className="d-flex justify-content-end mt-2 py-2">
        <button
          className="btn btn-sm btn-outline-danger me-2"
          onClick={props.closeCheckout}
          type="button"
        >
          Close
        </button>
        <button
          className="btn btn-sm btn-outline-warning"
          onClick={props.onConfirm}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
