import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../components/context/StoreContext';
import './FoodDetail.css';

const FoodDetail = () => {
  const { id } = useParams();
  const { food_list, addToCart, url } = useContext(StoreContext);

  const dish = food_list.find(item => item._id === id);

  if (!dish) {
    return <div className="p-4 text-center food-detail-message">Dish not found.</div>;
  }

  // Ensure full image path
  const imageUrl = dish.image.startsWith("http")
    ? dish.image
    : `${url}/images/${dish.image}`;

  return (
    <div className="food-detail-container">
      <img 
        src={imageUrl} 
        alt={dish.name} 
        className="food-detail-image" 
      />
      <h1 className="food-detail-title">{dish.name}</h1>
      <p className="food-detail-description">{dish.description || "Delicious meal from our menu."}</p>
      <p className="food-detail-price">${dish.price}</p>
      <button 
        className="food-detail-button" 
        onClick={() => addToCart(dish._id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodDetail;
