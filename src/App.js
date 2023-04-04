import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./Components/commerçant/Products/Products";
import OrdersCom from './Components/commerçant/Products/Orders';

import Fab from "./Components/commerçant/Fab/Fab";
import AddProduct from "./Components/commerçant/AddProduct";
import NavBarCommercant from "./Components/commerçant/NavBarCommercant/index";
import ProfilePage from "./Components/commerçant/ProfilePage";
import SignUpPage from "./Components/commerçant/SignUpPage";
import LoginComponent from "./Components/commerçant/LoginCommerçant/LoginComponent";


function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <LoginComponent></LoginComponent>
            </>
          }
        ></Route>
        <Route
          path="home"
          element={
            <>
              <NavBarCommercant />
              <Products></Products>
              <Fab></Fab>
            </>
          }
        ></Route>
        
        <Route
          path="addProduct"
          element={
            <>
              <NavBarCommercant />
              <AddProduct></AddProduct>
            </>
          }
        ></Route>
        <Route
          path="commandes"
          element={
            <>
              <NavBarCommercant />
              <OrdersCom/>
            </>
          }
        ></Route>
        <Route
          path="signup"
          element={
            <>
              <SignUpPage />
            </>
          }
        ></Route>
        <Route
          path="profile"
          element={
            <>
              <NavBarCommercant />
              <ProfilePage />
            </>
          }
        ></Route>
       
        
          
      </Routes>
    </Router>
  );
}

export default App;
