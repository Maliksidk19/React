import { useMealsListContext } from "./MealsProvider";

const Counter = () => {
  const { meals } = useMealsListContext();

  return (
    <>
      <h3>Numbers of meals today: {meals.length}</h3>
    </>
  );
};

export default Counter;
