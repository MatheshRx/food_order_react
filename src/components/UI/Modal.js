import { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";
import "../../css/materia/bootstrap.min.css";

const BackDrop = (props) => {
  return (
    <div onClick={props.onClose} className={`${classes.backDrop} closeModal`}>
      {props.children}
    </div>
  );
};

const ModalOverLay = (props) => {
  return (
    <BackDrop onClose={props.onClose}>
      <div className={`card col-9 col-md-7 rounded-3 p-3 ${classes.modal}`}>
        {props.children}
      </div>
    </BackDrop>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverLay onClose={props.onClose}>{props.children}</ModalOverLay>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
