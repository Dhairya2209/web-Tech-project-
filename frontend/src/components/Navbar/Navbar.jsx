// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../context/StoreContext';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken, food_list } = useContext(StoreContext);
//   const [searchText, setSearchText] = useState("");
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   const filteredResults = food_list.filter(item =>
//     item.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   // const handleResultClick = (item) => {
//   //   console.log("Selected dish:", item.name);
//   //   // Optionally navigate or show item detail
//   //   setSearchText(""); // clear input
//   // };
//   const handleResultClick = (item) => {
//     navigate(`/food/${item._id}`);
//     setSearchText("");
//   };
  

//   return (
//     <div className='navbar'>
//       <div className="navbar-left">
//         <Link to='/'>
//           <img className='logo' src={assets.logo} alt="Logo" />
//         </Link>
//       </div>

//       <ul className="navbar-menu">
//         <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
//         <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
//         <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
//         <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
//       </ul>

//       <div className="navbar-right">
//         <div className="navbar-search-container">
//           <input
//             type="text"
//             placeholder="Search dishes..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <img src={assets.search_icon} alt="Search" />
//           {searchText && (
//             <ul className="search-results">
//               {filteredResults.length > 0 ? (
//                 filteredResults.map(item => (
//                   <li key={item._id} onClick={() => handleResultClick(item)}>
//                     {item.name}
//                   </li>
//                 ))
//               ) : (
//                 <li>No results found</li>
//               )}
//             </ul>
//           )}
//         </div>

//         <div className="navbar-search-icon">
//           <Link to='/cart'>
//             <img src={assets.basket_icon} alt="Cart" />
//           </Link>
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>

//         {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
//           : <div className='navbar-profile'>
//             <img src={assets.profile_icon} alt="Profile" />
//             <ul className='nav-profile-dropdown'>
//               <li onClick={() => navigate('/myorders')}>
//                 <img src={assets.bag_icon} alt="Orders" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li>
//                 <img src={assets.logout_icon} alt="Logout" />
//                 <p onClick={logout}>Logout</p>
//               </li>
//             </ul>
//           </div>}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken, food_list } = useContext(StoreContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const filteredResults = food_list.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleResultClick = (item) => {
    navigate(`/food/${item._id}`);
    setSearchText("");
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to='/' onClick={() => { 
          setMenu("home"); 
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on Home click
        }}>
          <img className='logo' src={assets.logo} alt="Logo" />
        </Link>
      </div>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => {
          setMenu("home"); 
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on Home click
        }} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-container">
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img src={assets.search_icon} alt="Search" />
          {searchText && (
            <ul className="search-results">
              {filteredResults.length > 0 ? (
                filteredResults.map(item => (
                  <li key={item._id} onClick={() => handleResultClick(item)}>
                    {item.name}
                  </li>
                ))
              ) : (
                <li>No results found</li>
              )}
            </ul>
          )}
        </div>

        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="Logout" />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
