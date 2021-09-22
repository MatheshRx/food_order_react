import "../../css/materia/bootstrap.min.css";
import mainClasses from "../../css/style/Main.module.css";
import classes from "./Meals.module.css";

const MealsSummary = () => {
  return (
    <div
      className={`card col-9 col-md-6 mx-auto ${mainClasses["bg-strong-bliss"]} ${classes["summary-wrapper"]}`}
    >
      <h3 className="text-center">Delicious Food List</h3>
      <p className="px-3">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="px-3">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default MealsSummary;
