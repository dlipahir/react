import React from "react";
// import Homepage from './pages/homepage/homepage.component';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";

function Shop() {
  return <h1>this id shop page</h1>;
}

function App() {
  return (  
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
