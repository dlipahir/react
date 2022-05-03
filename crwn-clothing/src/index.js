import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { UserContext, UserProvider } from "./contexts/user.context";
import { UserProvider } from "./contexts/user.context";
import "./index.css";
import App from "./App";
import { createContext, useState } from "react";
import { ProductProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.context";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>,
  rootElement
);
