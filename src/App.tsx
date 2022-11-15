import React from 'react';
import Home from "./pages/Home";
import './main.css';
import GrandBudapestHotelImg from './assets/img/the-grand-budapest-hotel-poster.jpg';
import GrandBudapestBg from './assets/img/bg-the-grand-budapest-hotel.jpg';
import SignIn from "./pages/SignIn";


function App() {
  return (
    <div className="App">
     {/*<Home title={'The Grand Budapest Hotel'} filmImg={GrandBudapestHotelImg} genre={'Drama'} year={'2014'} filmBg={GrandBudapestBg}/>*/}
      <SignIn/>
    </div>
  );
}

export default App;
