import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);


  const filteredFoodItems = food_list.filter(item => category === 'All' || category === item.category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredFoodItems.length > 0 ? (
          filteredFoodItems.map(item => (
            <FoodItem
              key={item._id} // Using the unique _id as key
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No dishes found in this category.</p> // Message when no dishes match
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;







