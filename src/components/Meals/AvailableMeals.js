import { useCallback, useEffect, useState } from "react";
import "../../css/materia/bootstrap.min.css";
// import mainClasses from "../../css/style/Main.module.css";
import MealsItem from "./MealsItem/MealsItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [fetchFails, setFetchFails] = useState(false);

  const fetchMealsData = useCallback(async () => {
    setFetchFails(false);
    try {
      const response = await fetch(
        "https://react-http-c8897-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      let fetchedMealsData = [];

      for (let meal in data) {
        fetchedMealsData.push(data[meal]);
      }

      setMealsData(fetchedMealsData);
    } catch (error) {
      setFetchFails(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMealsData();
  }, [fetchMealsData]);

  const mealsList = mealsData.map((meal, index) => (
    <MealsItem
      key={`M${index}`}
      id={index}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={`col-md-8 px-2 mb-2 mx-auto`}>
      {fetchFails ? (
        <p className="text-danger card p-3 text-center">
          <b> Oops ..! </b>
          <h3>{fetchFails}</h3>
        </p>
      ) : (
        <ul className="list-group">{mealsList}</ul>
      )}
    </section>
  );
};

export default AvailableMeals;
