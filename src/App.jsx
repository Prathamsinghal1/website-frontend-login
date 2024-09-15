import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import Header from "./components/Navbar/Header";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Help from "./components/Help";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import SignInPage from "./components/Login/SignInPage";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {

  const [val, setVal] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("id")){
      dispatch(authActions.login());
    }
  },[])
  
  return (
    <>
        <Header setVal={setVal}/>
          <Routes>
            <Route exact path="/" element={<Home val={val} setVal={setVal}/>}/>
            <Route path="/about-us" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/logIn" element={<Login/>}>
                <Route index element={<SignInPage val={val} setVal={setVal}/>}/>
                <Route path='/logIn/forgotPassword' element={<ForgotPassword/>}/>
                <Route path='/logIn/resetPassword' element={<ResetPassword/>}/>
            </Route>
            <Route path="/signUp" element={<Register />}/>
            <Route path="/profile" element={<Dashboard setVal={setVal}/>}>
                {/* <Route index element={<Favourites/>}/>
                <Route path='/profile/orderHistory' element={<OrderHistory/>}/>
                <Route path='/profile/settings' element={<Settings/>}/> */}
            </Route>
          </Routes>
    </>
  );
}
