import { Fragment } from "react";
import meal1 from "../../assets/meals1.jpg";
import classes from "./Header.module.css";
import mainClasses from "../../css/style/Main.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={`card px-1 px-md-5 py-3 ${classes.header}`}>
        <div className="d-flex justify-content-between">
          <h2 className="d-flex align-items-center">Meals-Corner</h2>
          <HeaderButton onShow={props.onShowCart} />
        </div>
      </header>
      <div
        className={`text-center mx-2 py-2 ${classes["img-div"]} ${mainClasses["bg-amy-crisp"]} rounded-3`}
      >
        <img
          src={meal1}
          alt="Delecious Food Here!"
          height="300px"
          width="80%"
          className="rounded-3"
        />
      </div>
    </Fragment>
  );
};

export default Header;
