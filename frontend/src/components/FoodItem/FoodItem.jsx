// import React, { useContext } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../context/StoreContext';

// const FoodItem = ({ id, name, price, description, image }) => {
 
//   const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img src={url+"/images/"+image} alt='' className='food-item-image' />
//         {!cartItems[id]
//         ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
//         :<div className='food-item-counter'>
//           <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//           <p>{cartItems[id]}</p>
//           <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//           </div>

//         }
//       </div>
//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt='' />
//         </div>
//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    url,
    token
  } = useContext(StoreContext);

  const handleAddToCart = () => {
    if (!token) {
      alert("Please sign in to add items to your cart.");
      return;
    }
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    if (!token) return;
    removeFromCart(id);
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img src={url + "/images/" + image} alt='' className='food-item-image' />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt='add'
            style={{
              cursor: token ? 'pointer' : 'not-allowed',
              opacity: token ? 1 : 0.5
            }}
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={handleAddToCart}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
