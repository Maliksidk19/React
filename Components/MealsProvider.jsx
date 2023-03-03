import React from "react";

const MealsContext = React.createContext();
const todayMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ Children }) => {
  const [meals, setMealsList] = React.useState(todayMeals);
  return (
    <>
      <MealsContext.Provider value={meals}>{Children}</MealsContext.Provider>
    </>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
