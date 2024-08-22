import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import SignInPage from "./components/SignInPage";
import Home from "./components/Home";
import Register from "./components/Register";
import Help from "./components/Help";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ResetPassword from "./components/Login/ResetPassword";
import ForgotPassword from "./components/Login/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

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
