import React from 'react';
import { Outlet } from 'react-router-dom';
// import Homepage from 
 import Homepage from '../../pages/homepage/homepage.component';

function Home(){
  return (<div>
    <Outlet/>
    <Homepage />
  </div>)
}

export default Home;