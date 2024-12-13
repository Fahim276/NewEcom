import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import SingleProduct from './Components/SingleProduct';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Loginpage';
import Signup from './Pages/SignupPage';
import Contact from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/CartPage';
import AllProducts from './Components/AllProducts';
import { CartContextProvider } from './Context/CartContext';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import TnCPage from './Pages/TnCPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import FooterSection2 from './Components/FooterSection2';
import Checkout from './Pages/Checkout';

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
          <Route path="/terms" element={<TnCPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        
        <FooterSection2/>
        
      </Router>

    </CartContextProvider>
  );
};

export default App;
