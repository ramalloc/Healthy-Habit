import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import ContactUs from './pages/contactUs/ContactUs';
import HydrolizedProtein from './pages/ProductPages/HydrolizedProtein';
import IsolateProtein from './pages/ProductPages/IsolateProtein';
import Gainer from './pages/ProductPages/Gainer';
import MultiVitamin from './pages/ProductPages/MultiVitamin';
import PreWorkout from './pages/ProductPages/PreWorkout';
import TestosteroneBooster from './pages/ProductPages/TestosteroneBooster';
import WheyProtein from './pages/ProductPages/WheyProtein';
import FishOil from './pages/ProductPages/FishOil';
import FatBurner from './pages/ProductPages/FatBurner';
import EAA from './pages/ProductPages/EAA';
import Caffeine from './pages/ProductPages/Caffeine';
import BCAA from './pages/ProductPages/BCAA';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/category/hydrolized-protein" element={<HydrolizedProtein />} />
          <Route path="/category/isolate-protein" element={<IsolateProtein />} />
          <Route path="/category/gainer" element={<Gainer />} />
          <Route path="/category/multi-vitamin" element={<MultiVitamin />} />
          <Route path="/category/pre-workout" element={<PreWorkout />} />
          <Route path="/category/testosterone-booster" element={<TestosteroneBooster />} />
          <Route path="/category/whey-protein" element={<WheyProtein />} />
          <Route path="/category/fish-oil" element={<FishOil />} />
          <Route path="/category/fat-burner" element={<FatBurner />} />
          <Route path="/category/eaa" element={<EAA />} />
          <Route path="/category/caffeine" element={<Caffeine />} />
          <Route path="/category/bcaa" element={<BCAA />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'one@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}