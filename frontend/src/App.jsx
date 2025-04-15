// import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Footer from './components/Footer/Footer'
// import LoginPopup from './components/LoginPopup/LoginPopup'
// import Verify from './pages/Verify/Verify'
// import MyOrders from './pages/MyOrders/MyOrders'
// import FoodDetail from './pages/FoodDetail'; 


// const App = () => {
//   const [showLogin,setShowLogin]= useState(false)
//   return (
// <>
// {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
// <div className='app'>
//       <Navbar setShowLogin={setShowLogin}/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/order' element={<PlaceOrder/>}/>
//         <Route path='/verify' element={<Verify/>}/>
//         <Route path='/myorders' element={<MyOrders/>}/>
//         <Route path="/food/:id" element={<FoodDetail />} />
//       </Routes>
//     </div>
//     <Footer/>
// </>
//   )
// }

// export default App
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import FoodDetail from './pages/FoodDetail';
import ScrollToTop from './components/ScrollToTop';  // Import the ScrollToTop component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {/* {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>} */}
      {showLogin && (
  <>
    <div className="login-popup-overlay" onClick={() => setShowLogin(false)} />
    <LoginPopup setShowLogin={setShowLogin} />
  </>
)}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop /> {/* Include ScrollToTop here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path="/food/:id" element={<FoodDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
