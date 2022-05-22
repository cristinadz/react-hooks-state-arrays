import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [filter, setFilter] = useState("all");
  const [foods, setFoods] = useState(spicyFoods);

  const foodsToDisplay = foods.filter((food) => {
    if (filter === "all") {
      return true;
    } else {
      return food.cuisine === filter;
    }
  });

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleUpdate(id) {
    const newArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newArray);
  }
  function toggleFilter(e) {
    setFilter(e.target.value);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleUpdate(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={toggleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
