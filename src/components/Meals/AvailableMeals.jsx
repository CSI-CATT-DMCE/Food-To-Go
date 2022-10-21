import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Yellow Bowl",
    description: "Fast...and Tasty...",
    price: 21.99,
  },
  {
    id: "m6",
    name: "Gazpacho",
    description: "A spanish delicacy",
    price: 8.99,
  },
  {
    id: "m7",
    name: "Croissant",
    description: "Buttery, flaky, French viennoiserie pastry",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
